const { Product } = require("../db");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};
