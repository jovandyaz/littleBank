const express = require('express')
const router = express.Router()
const TransactionM = require('../models/TransactionM')

router.get('/transactions', function (req, res) {
    TransactionM.find({}, function (err, trans) {
        // console.log("transCollection:\n", trans)
        res.send(trans)
    })
})

router.post('/transaction', function (req, res) {
    console.log("NewTrans(req.body):", req.body)
    const newTrans = new TransactionM(req.body)
    newTrans.save()
    res.send("POST COMPLETE")
})

router.delete('/transaction/:transaction', function (req, res) {
    console.log(req.params.transaction)
    let transID = req.params.transaction
    TransactionM.deleteOne({ _id: transID }, function (err, res) {
        console.log(res)
    })
    res.send("DELETE COMPLETE")
})

module.exports = router