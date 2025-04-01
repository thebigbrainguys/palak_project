const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
    pincode: {type:String, required:true, unique: true},
    city: {type:String, required:true},
    state: {type:String, required:true}
});

mongoose.models = {}
export default mongoose.model("Pincode", pincodeSchema);