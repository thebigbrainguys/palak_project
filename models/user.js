const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, default:''},
    pincode: {type: String,  default:''},
    phoneno: {type: String,  default:''},
    isAdmin: {type: Boolean, default:false}
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model("User", userSchema);
//OR
// const User = mongoose.models.users || mongoose.model("User", userSchema);
// export default User