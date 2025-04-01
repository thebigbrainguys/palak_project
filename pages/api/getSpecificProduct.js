import connectDB from "../../middleware/mongoose";
import Product from '../../models/product'

const handler = async (req, res) =>{
    if(req.method == "POST"){
        let product = await Product.findOne({slug: req.body.slug})
        res.status(200).json({ product})
    } else {
        res.status(400).json({error: error})
    }
}

export default connectDB(handler)