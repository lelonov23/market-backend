const express = require("express");
const router = express.Router();
const getProductsBuilder = require("./products");
const getCategoriesBuilder = require("./categories");
const getParamsBuilder = require("./params");

getProductsBuilder.build(router);
getCategoriesBuilder.build(router);
getParamsBuilder.build(router);

module.exports = router;
