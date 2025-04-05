import Product from "../../models/product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    try{
        if(req.method == "POST"){
                let product = new Product({
                    title: req.body.title,
                    slug: req.body.slug,
                    description: req.body.description,
                    image:req.body.image,
                    category:req.body.category,
                    size: req.body.size,
                    colour: req.body.colour,
                    price: req.body.price,
                    availableQuantity: req.body.availableQuantity,
                })
                await product.save();
            
            res.status(200).json({success: true})
        }else{
            res.status(400).json({success: false, message: "Method Not Allowed"})
        }
    } catch(e){
        console.log(e)
        res.status(400).json({success: false, message: "Internal Server Error!"})
    }
} 

export default connectDB(handler)
