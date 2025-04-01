import Product from "../../models/product";
import connectDB from "../../middleware/mongoose";
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
    if(req.method == "POST"){
        try{
            const token = req.body.token;
            let user = jwt.verify(token, process.env.JWT_SECRET)
            if(user.email == 'admin@genzwears.com'){
                const updates = {
                    title: req.body.title,
                    category: req.body.category,
                    size: req.body.size,
                    colour: req.body.colour,
                    price: req.body.price,
                    availableQuantity: req.body.availableQuantity,
                    image: req.body.image,
                    description: req.body.description,
                }
                await Product.findOneAndUpdate({slug: req.body.slug}, updates);
                res.status(200).json({success: true})
            } else {
                res.status(200).json({success: false})
            }
        }catch(e){
            res.status(200).json({success: false})
        }
    }else{
        res.status(400).json({success: "This method is not allowed"})
    }
} 

export default connectDB(handler)
