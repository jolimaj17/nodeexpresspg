const Product = require("../models/product");

const index = async (req, res) => {
  Product.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:error.message || "Not Exist."
      });
    })
};
const create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Fill all field"
    });
    return;
  }
   Product.create(req.body)
    .then(data => {
      res.send({message:"Successfully added!",data});
    })
    .catch(error => {
      res.status(500).send({
        message:error.message || "Not sucessfull"
      });
    })
};
const update = async (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then(data => {
      res.send({message:"Successfully updated!"});
    })
    .catch(error => {
      res.status(500).send({
        message:error.message || "Not sucessfull"
      });
    })
};
const deletes = async (req, res) => {
   Product.destroy({ where: { id: req.params.id } })
    .then(data => {
      res.send({message:"Successfully deleted!"});
    })
    .catch(error => {
      res.status(500).send({
        message:error.message || "Not sucessfull"
      });
    })
};
const show = async (req, res) => {
  Product.findOne({ where: { id: req.params.id } })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:error.message || "Not Exist."
      });
    })
};

const ProductController = { index,create,update,deletes,show};
module.exports = ProductController;