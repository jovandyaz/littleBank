const express = require('express')
const router = express.Router()
const TransactionM = require('../models/TransactionM')

router.get('/transactions', function (req, res) {
    TransactionM.find({}, function (err, trans) {
        console.log("transCollection:\n", trans)
        res.send(trans)
    })
})

router.post('/transaction', function (req, res) {
    console.log("NewTrans(req.body):", req.body)
    const newTrans = new TransactionM(req.body)
    newTrans.save()
    res.send("POST COMPLETE")
})

module.exports = router