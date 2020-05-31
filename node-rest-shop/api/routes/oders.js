const express = require('express');
const router = express.Router();
const Order = require('./models/orders');
const mongoose = require('mongoose');

// working fine below
router.get('/', (req, res, next ) => {
    Order.find({}).then(function (orders) {
        res.send(orders);
        res.status(200).json({
            message: 'getOrders'            
        });
    });
});

// working fine below
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
    // const id = req.param.orderId;
    // res.status(200).json({
    //     message: 'Order details',
    //     orderId: req.param.orderId
    // });
    const id = req.param.productId;
    Order.findById(id)
    .exec()
    .then(doc => {
        //console.log(doc);
        res.status(200).json({doc});
    })
    .catch(err => {
        //console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order removed',
        orderId: req.param.orderId
    });
});



module.exports = router;
