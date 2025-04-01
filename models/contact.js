const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    solved: {type: Boolean, default: false},
}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);