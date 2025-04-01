const mongoose = require('mongoose');

const forgotSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    token: {type: String, required: true},
}, {timestamps: true});

mongoose.models = {}
//OR
// export default mongoose.models.User || mongoose.model("User", userSchema);
export default mongoose.model("Forgot", forgotSchema);