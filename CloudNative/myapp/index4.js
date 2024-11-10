const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = "mongodb://localhost:27017"; // or your Atlas connection string

const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Specify the database and collection
        const database = client.db('yourDatabaseName'); // replace with your database name
        const collection = database.collection('yourCollectionName'); // replace with your collection name

        // Example: Find one document
        const query = { name: "example" }; // adjust your query
        const document = await collection.findOne(query);
        console.log(document);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);
