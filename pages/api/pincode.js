import Pincode from "../../models/pincode";
import connectDB from "../../middleware/mongoose";


async function handler(req, res) {
    try{
        let pincodes = await Pincode.find();
        let pins={};
        for(let i=0; i<pincodes.length; i++){
            pins[pincodes[i].pincode] = [pincodes[i].city, pincodes[i].state]
        }
        res.status(200).json(pins);
    }catch(e){
        res.status(500).json({error: e})
    }
}
// export default function handler(req, res) {
//     try{
//         let pincodes = {
//             "444606": ["Amravati", "Maharashtra"],
//             "444601": ["Amravati", "Maharashtra"],
//             "441110": ["Nagpur", "Maharashtra"],
//             "335009": ["Surat", "Gujarat"],
            
//         }
//         res.status(200).json(pincodes);
//     }catch(e){
//         res.status(500).json({error: e})
//     }
// }

export default connectDB(handler)