import connectDB from "../../middleware/mongoose";
import Pincode from "../../models/pincode";

const handler = async (req, res)=> {
    if (req.method === 'POST') {    
      // Process a POST request
      let pincode = new Pincode({
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
      })
      await pincode.save()
      res.status(200).json({success: "success"})
    } else {
      // Handle any other HTTP method
      res.status(200).json({error: "error"})
    }
  }

  export default connectDB(handler);