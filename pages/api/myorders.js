import Order from "../../models/order";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {   
    try{
        const token = req.body.token
        var decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let orders = await Order.find({email: decoded.email});
        res.status(200).json({'success': true, orders});
    } catch{
        res.status(400).json({'success': false, 'message': "Login Again!"});
    }
}

export default connectDB(handler)