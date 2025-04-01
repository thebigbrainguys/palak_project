import Order from "../../models/order";
import connectDB from "../../middleware/mongoose";
import Product from "../../models/product";
import { useRouter } from "next/router";
const https = require('https');
// const PaytmChecksum = require('PaytmChecksum');

const handler = async (req, res) =>    {
    if (req.method == "POST") {
        try {
            // Check if the cart is tampered with
            let product, sumTotal=0;
            let cart = req.body.cart;
            for(let item in req.body.cart){
                sumTotal+=cart[item].price*cart[item].qty;
                product = await Product.findOne({"slug":item})
                if(product.availableQuantity < cart[item].qty){
                    res.status(200).json({success:false, "error": `${cart[item].name} have only ${cart[item].qty} items left in stock.`})
                    return;
                }
                if(product.price != cart[item].price){
                    res.status(200).json({success:false, "error": "The price of some items in your cart has changed! Please try again."})
                    return;
                }
            }
            if(sumTotal != req.body.subTotal){
                res.status(200).json({success:false, "error": "The price of some items in your cart has changed! Please try again."})
                return;
            }
    
            //Check if the data is valid or not
            if(req.body.phone.length !== 10 || isNaN(req.body.phone)){
                res.status(200).json({success:false, "error": "Enter a valid phone number"})
                return;
            }
            if(req.body.pincode.length !== 6){
                res.status(200).json({success:false, "error": "Enter a valid pincode"})
                return;
            }
    
            // Check if the stock is available or not
    
    
            let order = new Order({
                email: req.body.email,
                orderId: req.body.oid,
                paymentInfo: req.body.paymentInfo,
                products: req.body.cart,
                address: req.body.address,
                phoneno: req.body.phone,
                state: req.body.state,
                city: req.body.city,
                pincode: req.body.pincode,
                amount: req.body.subTotal,
                status: 'Pending',
            })
            await order.save();
            let foundOrder = await  Order.findOneAndUpdate({orderId: req.body.oid}, {status: "Paid", paymentInfo: JSON.stringify(req.body)})
            let products = foundOrder.products
            for(let slug in products){
                await Product.findOneAndUpdate({"slug":  slug}, {$inc: {"availableQuantity": -products[slug].qty}})
            }
            res.status(200).json({'success': true, 'url': `/order?id=${foundOrder._id}&clearCart=1`})
            return;
        } catch (error) {
            return res.status(500).json({'message': "Internal Server Error!"})
        }
    }

    var paytmParams = {};

    paytmParams.body = {
        "requestType": "Payment",
        "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
        "websiteName": process.env.NEXT_PUBLIC_NAME,
        "orderId": req.body.oid,
        "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
        "txnAmount": {
            "value": req.body.subTotal,
            "currency": "INR",
        },
        "userInfo": {
            "custId": req.body.email,
        },
    };


    const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY)

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        const requestAsync = async () =>{
            return new Promise((resolve, reject)=>{
                var options = {

                    /* for Staging */
                    // hostname: 'securegw-stage.paytm.in',
        
                    /* for Production */
                    hostname: 'securegw.paytm.in',
        
                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };
        
                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });
        
                    post_res.on('end', function () {
                        // console.log('Response: ', response);
                        let ress = JSON.parse(response).body
                        ress.success = true
                        resolve(ress)
                    });
                });
        
                post_req.write(post_data);
                post_req.end();
            })
        }

        let myr = await requestAsync();
        res.status(200).json(myr)

        

}

export default connectDB(handler);