import Order from "../../models/order";
import connectDB from "../../middleware/mongoose";
import Product from "../../models/product";

const handler = async(req, res)=> {
    let order;
    if(req.body.STATUS == 'TXN_SUCCESS'){
      order = await  Order.findOneAndUpdate({orderId: req.body.ORDERID}, {status: "Paid", paymentInfo: JSON.stringify(req.body)})
      let products = order.products
      for(let slug in products){
        await Product.findOneAndUpdate({"slug":  slug}, {$inc: {"availableQuantity": -products[slug].qty}})
      }
      // Order.findOneAndUpdate({})
    }else if(req.body.STATUS == 'PENDING'){
      order = Order.findOneAndUpdate({orderId: req.body.ORDERID}, {status: "Pending", paymentInfo: JSON.stringify(req.body)})
    }
    res.redirect(`/order?id=${order._id}&clearCart=1`, 200)
}

export default connectDB(handler)
  