const express = require('express')
const cors = require('cors')
const app = express()
require("dontenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running")
})

module.exports = app;