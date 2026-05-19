// server.js
const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 3030;

app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// MongoDB Connection URL
const MONGO_URL ="mongodb://admin123:pass123@mongo:27017/?authSource=admin";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db("my-sample-db");
    const data = await db.collection("users").find({}).toArray();

    client.close();
    res.send(data);
});

// POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(userObj);
    
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db("my-sample-db");
    const data = await db.collection("users").insertOne(userObj);

    console.log(data);
    console.log("Data inserted in DB");

    client.close();

    res.send(`
        <h2>User Added Successfully!</h2>
        <p>Email: ${userObj.email}</p>
        <p>Username: ${userObj.username}</p>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});