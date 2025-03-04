const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./Products.route')

app.use(cors());



mongoose.connect('mongodb+srv://cluster0.y70bk.mongodb.net/seeit', {
    dbName: 'seeit',
    pass: 'bT7jfxiGZkWQ8yId',
    user: 'chaitanyasai',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.use('/products', productsRouter);
app.use('/', (req, res) => {
 res.status(200).json('Welcome to vercel')
})
// app.use('/products/:id', productsRouter);


