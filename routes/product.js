const express = require("express");

const routes = express.Router();

const ProductController = require("../controllers/product");

routes.get("/", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.post("/product/create", ProductController.create);
routes.put("/product/update/:id", ProductController.update);
routes.delete("/product/delete/:id", ProductController.deletes);

module.exports = routes;
