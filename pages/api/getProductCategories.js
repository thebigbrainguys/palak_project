import Category from "../../models/category";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    let categories = await Category.find();
    let categoryArray = []
    for(let item of categories){
        let str = item.categoryName
        str = str.charAt(0).toUpperCase() + str.slice(1,)
       categoryArray.push(str)
    }
    res.status(200).json(categoryArray);
} 

export default connectDB(handler)