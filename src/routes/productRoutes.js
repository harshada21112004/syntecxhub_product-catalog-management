const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const productValidation = require(
  "../validators/productValidator"
);

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  productStats,
} = require(
  "../controllers/productController"
);

// Create Product
router.post(
  "/",
  protect,
  productValidation,
  createProduct
);

// Get All Products
router.get(
  "/",
  protect,
  getProducts
);

// Statistics
router.get(
  "/stats",
  protect,
  productStats
);

// Update Product
router.put(
  "/:id",
  protect,
  updateProduct
);

// Delete Product
router.delete(
  "/:id",
  protect,
  deleteProduct
);

module.exports = router;