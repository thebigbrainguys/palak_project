const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email: {type: String, required: true},
    orderId: {type: String, required: true},
    paymentInfo: {type: String, default:''},
    phoneno: {type: String, required:true},
    products: {type:Object, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    pincode: {type: String, required: true},
    amount: {type: Number, required:true},
    status: {type: String, default: "Initiated", required:true},

}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.Order || mongoose.model("Order", orderSchema);