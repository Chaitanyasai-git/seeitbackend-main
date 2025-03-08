const express = require('express');
const router = express.Router()

const Product = require('../Models/Product.model')
const { generateProductId } = require('../helperFunctions');

router.post('/', async (req, res) => {
try {
    const product = new Product({
        productId: generateProductId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
    product.save()
    const response = {
        status: 200,
        message: "Product Added Successfully",
        data: product
    }
    return res.json(response)
} catch (error) {
   return res.json(error)
}
})

module.exports = router;