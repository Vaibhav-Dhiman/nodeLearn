const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/oders');

// morgon used for loging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST,PATCH, DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

mongoose.connect('mongodb://localhost/ProductOrder');

// mongodb+srv://vaibhav:<password>@cluster0-4ttpq.mongodb.net/test?retryWrites=true&w=majority

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;