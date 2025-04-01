import Forgot from '../../models/forgot';
import User from '../../models/user';

const handler = async (req, res)=> {
    if(req.method == "POST"){
        
        if(req.body.sendMail){
            // Check if the email exists in the database
            let token = 'asjhhbdjahsbfjdbwerbjbsadfmbdsa345'
            
            let forgot = new Forgot({
                email: req.body.email,
                token: token
            })

            let email = `We have sent you this email in response to your request to reset your password on ${process.env.NEXT_PUBLIC_NAME}. After you reset your 
                password.
                To reset your password for ${process.env.NEXT_PUBLIC_NAME}, please follow the link below:
                <a href="https://genzwears.com/forgotpassword?token=${token}">Click here to reset your password</a>
                <br/><br/>
                We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can 
                change it by going to your ${process.env.NEXT_PUBLIC_NAME} My Account Page.
                If you need help, or you have any other questions, feel free to email , or call ${process.env.NEXT_PUBLIC_NAME} customer service
                toll-free at .
                <br/><br/>
                ${process.env.NEXT_PUBLIC_NAME} Customer Service`
        
            res.status(200).json({ success:true, message: "Email sent successfully to your email address!" });
        } else {
            //Reset user password
            
            res.status(200).json({ success:true, message: "Password Reset Successfully!" });
        }
    
    }else{
        res.status(400).json({error: "Bad Request"})
    }
  }

  export default handler