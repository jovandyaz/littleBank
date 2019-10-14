const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    vendor: String,
    category: String
})

const TransactionM = mongoose.model("transactions", transactionSchema)
module.exports = TransactionM