const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Data (You can replace this with your database later)
const articles = [
    { id: 1, designation: "Laptop", quantite: 5, prix: 999.99 },
    { id: 2, designation: "Novel", quantite: 10, prix: 19.99 },
    { id: 3, designation: "T-Shirt", quantite: 20, prix: 14.99 },
    { id: 4, designation: "Sofa", quantite: 2, prix: 499.99 },
    { id: 5, designation: "Headphones", quantite: 15, prix: 49.99 },
    { id: 6, designation: "Smartphone", quantite: 8, prix: 699.99 },
    { id: 7, designation: "Backpack", quantite: 30, prix: 29.99 },
    { id: 8, designation: "Desk Chair", quantite: 12, prix: 149.99 },
    { id: 9, designation: "Wristwatch", quantite: 50, prix: 199.99 },
    { id: 10, designation: "Gaming Console", quantite: 4, prix: 399.99 },
    { id: 11, designation: "Coffee Machine", quantite: 6, prix: 89.99 },
    { id: 12, designation: "Bluetooth Speaker", quantite: 25, prix: 39.99 },
    { id: 13, designation: "Microwave Oven", quantite: 7, prix: 120.99 },
    { id: 14, designation: "Electric Scooter", quantite: 3, prix: 350.00 },
    { id: 15, designation: "Bicycle", quantite: 10, prix: 250.00 },
    { id: 16, designation: "Tablet", quantite: 9, prix: 299.99 },
    { id: 17, designation: "Monitor", quantite: 8, prix: 199.99 },
    { id: 18, designation: "Keyboard", quantite: 20, prix: 29.99 },
    { id: 19, designation: "Mouse", quantite: 25, prix: 14.99 },
    { id: 20, designation: "External Hard Drive", quantite: 12, prix: 79.99 },
    { id: 21, designation: "Fitness Tracker", quantite: 18, prix: 99.99 },
    { id: 22, designation: "Digital Camera", quantite: 5, prix: 549.99 },
    { id: 23, designation: "Electric Kettle", quantite: 10, prix: 24.99 },
    { id: 24, designation: "Air Conditioner", quantite: 3, prix: 299.99 },
    { id: 25, designation: "Bookshelf", quantite: 4, prix: 129.99 },
    { id: 26, designation: "TV Stand", quantite: 6, prix: 79.99 },
    { id: 27, designation: "Vacuum Cleaner", quantite: 7, prix: 150.00 },
    { id: 28, designation: "Water Bottle", quantite: 100, prix: 9.99 },
    { id: 29, designation: "Smartwatch", quantite: 12, prix: 199.99 },
    { id: 30, designation: "Printer", quantite: 6, prix: 149.99 },
]


// Search Endpoint
app.get('/api/search', (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.json(articles);  // Return all articles if no query is provided
    }
    const filteredArticles = articles.filter(article =>
        article.designation.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredArticles);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


