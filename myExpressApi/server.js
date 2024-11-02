const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Data (You can replace this with your database later)
const categories =[
            { id: 1, name: "Electronics" },
            { id: 2, name: "Books" },
            { id: 3, name: "Clothing" },
            { id: 4, name: "Furniture" },
        ];


// Search Endpoint
app.get('/api/categories', (req, res) => {
    const query = req.query.categ;
    if (!query) {
        return res.json(categories);
    }
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredCategories);
});

// Start the server
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});