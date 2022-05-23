const { getParams } = require("../controllers/getParamsController");

module.exports = {
  build(router) {
    router.get("/params", getParams);
  },
};
