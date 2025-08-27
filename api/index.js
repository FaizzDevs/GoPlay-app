const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb+srv://faizzdevs:faizzdevs@cluster0.bjmau1g.mongodb.net/go-play")
    .then(() => console.log("mongoDB Connect"))
    .catch((err) => console.error("MongoDB connect error"))

app.listen(PORT, () => console.log("Server running on port 3001"));