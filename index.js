const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./Routes/Products.route')
const productRouter = require('./Routes/Product.route')
const loginRouter = require('./Routes/Login.route')
const usersRouter = require('./Routes/Users.route')
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();



mongoose.connect(process.env.MONGO_URI, {
    dbName: 'seeit',
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/products', productsRouter);
app.use('/addProduct', productRouter)
app.use('/createUser', loginRouter)
app.use('/users', usersRouter)
app.use('/', (req, res) => {
 res.status(200).json('Welcome to vercel')
})
// app.use('/products/:id', productsRouter);


