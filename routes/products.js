const { getProducts } = require("../controllers/getProductsController");

module.exports = {
  build(router) {
    router.get("/products", getProducts);
  },
};
