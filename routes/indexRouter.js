const express = require("express");
const router = express.Router();

const {
  getCategories,
  getProducts,
  getParams,
} = require("../controllers/indexController");

router.get("/categories", getCategories);

router.get("/products", getProducts);

router.get("/params", getParams);

module.exports = router;
