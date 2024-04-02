const { default: mongoose } = require("mongoose");

const {Schema, model} = mongoose

const testModelSchema = new Schema({
    name: String,
    category: String,
    price: Number
})

const TestModel = model('TestModel', testModelSchema)
module.exports = TestModel