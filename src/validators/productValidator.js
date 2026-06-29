const { body } = require("express-validator");

const productValidation = [
  body("name")
    .notEmpty()
    .withMessage("Product name is required"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("price")
    .isNumeric()
    .withMessage("Price must be numeric"),

  body("stock")
    .isNumeric()
    .withMessage("Stock must be numeric"),
];

module.exports = productValidation;