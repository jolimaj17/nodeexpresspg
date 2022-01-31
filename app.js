const express = require("express");
const cors = require("cors");

const routes = require("./routes/product");
const application = express();

application.use(express.json())
application.use(cors())
application.use(routes)

module.exports = application;