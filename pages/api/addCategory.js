import Category from "../../models/category";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        let newCategory = new Category({
            categoryName: req.body.categoryName
        })
        newCategory.save();
        res.status(200).json({success: "success"});
    } else{
        res.status(400).json({error: "error"});
        
    }
    
} 

export default connectDB(handler)