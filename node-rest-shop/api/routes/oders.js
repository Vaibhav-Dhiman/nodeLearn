const express = require('express');
const router = express.Router();

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message: 'Orders were fetch'
    });
});

router.post('/', (req, res, next ) => {
    res.status(201).json({
        message: 'Orders were added'
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
