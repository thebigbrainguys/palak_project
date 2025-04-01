const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {type: String, required: true, unique: true}
}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.Category || mongoose.model("Category", categorySchema);