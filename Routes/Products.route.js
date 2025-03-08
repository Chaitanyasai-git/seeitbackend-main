const express = require('express');
const 
router = express.Router();

const Product = require('../Models/Product.model.js');
const { generateProductId } = require('../helperFunctions.js');

router.get('/', async (req, res) => {
   try {
    const products = await Product.find({}, {_id: 0, __v: 0});
    res.json({
     status: 200,
     message: 'Products fetched successfullhhhy',
     data: products
    });
   } catch (error) {
    res.status(500).json({message: error.message});
   }
});

// router.post('/', (req, res) => {
//     const product = new Product({
//         productId: generateProductId(),
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description
//     });
//     product.save();
//     res.json(product);
// });

router.get('/:id', async (req, res) => {
    const id = req?.params?.id;
    const product = await Product.findOne({productId: id}, {_id: 0, __v: 0});
    res.json(product);
});

router.put('/:id', async (req, res) => {
    const product = await Product.findOneAndUpdate({productId: req?.params?.id}, req?.body, {new: true});
    res.json(product);
});

router.delete('/:id', async (req, res) => {
    const id = req?.params?.id;
    const product = await Product.findOneAndDelete({productId: id}, {_id: 0, __v: 0});
    res.json(product);
});





module.exports = router;


