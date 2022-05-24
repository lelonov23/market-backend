const { Category, PresetFilter, FilterData, FilterValue } = require("../db");

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
                },
              ],
            },
          ],
        },
      ],
    });

    const resCategories = JSON.parse(JSON.stringify(categories)).map(
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

    res.status(200).json(resCategories);
  } catch (error) {
    res.status(500).send(error);
  }
};
