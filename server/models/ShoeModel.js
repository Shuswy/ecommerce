const { Schema, model } = require("mongoose");

const ShoeSchema = new Schema({
    cover: String,
    price: Number,
    name: String,
    category: String
})

const ShoeModel = model('Shoe', ShoeSchema)
module.exports = ShoeModel