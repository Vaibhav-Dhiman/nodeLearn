const express = require('express');
const router = express.Router();
const Order = require('./models/orders');
const mongoose = require('mongoose');

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message: 'Orders were fetch'
    });
});

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        quantity: req.body.quantity
    });

    order
    .save()
    .then(result => {
        //console.log(result);
        res.status(201).json({
            message: 'into the post orders', 
            createdOrder: order
        
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.param.orderId;
    res.status(200).json({
        message: 'Order details',
        orderId: req.param.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order removed',
        orderId: req.param.orderId
    });
});



module.exports = router;
