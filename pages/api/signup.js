import User from "../../models/user";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if(req.method == "POST"){
        const {name, email} = req.body;
        const user = await User.findOne({email: email})
        if(user){
            res.status(200).json({success: false, message: 'User already exist!'})
        } else {
            let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()});
            var usertoken = jwt.sign({email: email, name: name}, process.env.JWT_SECRET, {expiresIn: '2d'});
            await u.save();
            res.status(200).json({success: true, token: usertoken, email: req.body.email})
        }
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
} 

export default connectDB(handler)
