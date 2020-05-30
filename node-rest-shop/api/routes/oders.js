const express = require('express');
const router = express.Router();

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message: 'Orders were fetch'
    });
});

router.post('/', (req, res, next ) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(201).json({
        message: 'Orders were added',
        order: order
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
