const { getCategories } = require("../controllers/getCategoriesController");

module.exports = {
  build(router) {
    router.get("/categories", getCategories);
  },
};
