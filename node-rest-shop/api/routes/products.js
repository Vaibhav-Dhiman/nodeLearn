const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
        res.status(200).json({
            message: 'into the get products' 
        });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'into the post products' 
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.param.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discoverd the special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passes an id'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
        res.status(200).json({
            message: 'updated product'
        });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'delete product'
    });
});


module.exports = router;
