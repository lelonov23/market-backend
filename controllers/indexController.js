const {
  Category,
  Product,
  Param,
  PresetFilter,
  FilterData,
  FilterValue,
} = require("../models");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: PresetFilter,
          as: "filters",
          required: false,
          attributes: {
            exclude: ["createdAt", "updatedAt", "categoryId"],
          },
          include: [
            {
              model: FilterData,
              as: "filters",
              attributes: {
                exclude: ["createdAt", "updatedAt", "id", "filterId"],
              },
              include: [
                {
                  model: FilterValue,
                  as: "value",
                  attributes: ["value"],
                  raw: true,
                },
              ],
            },
          ],
        },
      ],
    });

    //models to raw json
    const resCategoriesString = JSON.stringify(categories);
    //map data to respond with
    const resCategories = JSON.parse(resCategoriesString).map(
      ({ filters, ...attrs }) => {
        if (filters.length === 0) return attrs;
        const newFilters = filters.map((filter) => {
          const newFilterData = filter.filters.map((filterData) => {
            const newValue = filterData.value.map((val) => {
              return val.value;
            });
            return { ...filterData, value: newValue };
          });
          return { ...filter, filters: newFilterData };
        });
        return { ...attrs, filters: newFilters };
      }
    );

    res.status(200).send(resCategories);
  } catch (error) {
    res.status(500).send(error);
  }
};

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
