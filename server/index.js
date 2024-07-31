require('dotenv').config()
const config = require('./config.json')
const mongoose = require("mongoose")

mongoose.connect(config.connectiomString)

const express = require("express")
const cors = require("cors")
const app = express()

const jwt = require("jsonwebtoken")
const {authenticationToken} = require("./utitlities")

app.use(express.json())

app.use(
    cors({
        origin: "*",
    })
)

app.get("/", (req, res) => {
    res.json({data: "hello"})
})

app.listen(8000)

module.exports = app