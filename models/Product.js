const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availableQty:{
        type: Number,
        required: true
    },
}, {timestamps: true});

mongoose.models = {}

const Product = mongoose.model("Product", ProductSchema);

export default Product;