const { Param } = require("../db");

exports.getParams = async (req, res) => {
  try {
    const params = await Param.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "id"],
      },
    });

    res.status(200).json(params);
  } catch (error) {
    res.status(500).send(error);
  }
};
