// import User from "@/models/user";
import {jwtVerify} from "jose";

async function getUserFromToken(token){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    if(token){
        try{
            const {payload} = await jwtVerify(token, secret);
            const decodedToken  = payload;
            // const user = await User.findOne({email: decodedToken.email});
            return "decodedToken";
        } catch(e) {
            console.log("Error: "+e)
        }
    }
}

export default getUserFromToken