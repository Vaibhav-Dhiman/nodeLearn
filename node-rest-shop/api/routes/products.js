const express = require('express');
const router = express.Router();
const Product = require('./models/products');
const mongoose = require('mongoose');

// working fine below
router.get('/', (req, res, next) => {
    Product.find({}).then(function (products) {
        res.send(products);
        res.status(200).json({
            message: 'getProducts'            
        });
    });
});

// working fine below
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
    .save()
    .then(result => {
        //console.log(result);
        res.status(201).json({
            message: 'into the post products', 
            createdProduct: product
        
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.param.productId;
   Product.findById(id)
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
