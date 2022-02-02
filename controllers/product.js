const Product = require("../models/product");

const index = async (req, res, next) => {
  Product.findAll()
    .then((data) => res.json(data))
    .catch(next);
};
const create = async (req, res) => {
  Product.create(req.body)
    .then((data) => res.send({ message: "Successfully added!", data }))
    .catch((error) =>
      res.status(400).send({
        message: `Unable to save data, ${error.errors[0].message}`,
        status: 400,
      })
    );
};
const update = async (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then((data) => {res.send({ message: "Successfully updated!" })})
    .catch((error) =>
      res.status(400).send({
        message: `Unable to update data, ${error.errors[0].message}`,
        status: 400,
      })
    );
};
const deletes = async (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ message: "Successfully deleted!"}))
    .catch((error) =>
      res.status(400).send({
        message: error.errors,
        status: 400,
      })
    );
};
const show = async (req, res, next) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((data) => res.send(data))
    .catch(next);
};

const ProductController = { index, create, update, deletes, show };
module.exports = ProductController;
