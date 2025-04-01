import connectDB from "../../middleware/mongoose";
import Contact from "../../models/contact";

const handler = async (req, res)=> {
    if (req.method === 'POST') {    
      // Process a POST request
      let contactInfo = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      })
      await contactInfo.save()
      res.status(200).json({success: "success"})
    } else {
      // Handle any other HTTP method
      res.status(200).json({error: "error"})
    }
  }

  export default connectDB(handler);