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

// working file below
router.get('/:productId', (req, res, next) => {

    Product.findById(req.params.productId).then(function (products) {
        res.send(products);
        res.status(200).json({
            message: 'getProducts by id'            
        });
    });
});


// need to work on below
router.patch('/:productId', (req, res, next) => {
       const id = req.params.productId;
       const updateOps = {};
       for (const ops of req.body) {
           updateOps[ops.propName] = ops.value;
       }
       Product.update({_id: id}, {$set: updateOps})
       .exec()
       .then(result => {
           console.log(result);
           res.status(200).json({result});
       })
       .catch(err => {
           console.log(err);
       }); 
});


// worked deleted below
router.delete('/:productId', (req, res, next) => {
   const id = req.params.productId;
   Product.remove({_id: id})
   .exec()
   .then(result => {
    res.status(200).json(result);
   })
   .catch(err => {
       res.status(500).json({
           message: err
       });
   });
});

module.exports = router;