const express = require("express");
const morgan = require("morgan");
var cors = require("cors")
const mainRouter = require( "./src/routes/mainRouter   ")
const app = express();

app.use(morgan("dev"));
app.use(cors())
app.use(express.json())
app.use(mainRouter)

module.exports = app