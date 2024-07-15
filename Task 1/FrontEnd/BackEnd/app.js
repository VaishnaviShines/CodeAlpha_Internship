const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB (adjust the connection string as needed)
mongoose.connect('mongodb://localhost/simple-ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Product model
const Product = mongoose.model('Product', {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    // Add other product properties as needed
});

// Product routes
app.use(bodyParser.json());

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add more routes (create, update, delete, etc.) as needed

// Serve static files from the frontend directory
app.use(express.static('frontend'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
