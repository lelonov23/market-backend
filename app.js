const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");

app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const products = await db.Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await db.Category.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: db.PresetFilter,
          as: "filters",
          required: false,
          attributes: {
            exclude: ["createdAt", "updatedAt", "categoryId"],
          },
          include: [
            {
              model: db.FilterData,
              as: "filters",
              attributes: {
                exclude: ["createdAt", "updatedAt", "id", "filterId"],
              },
              include: [
                {
                  model: db.FilterValue,
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
});

app.get("/params", async (req, res) => {
  try {
    const params = await db.Param.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "id"],
      },
    });

    res.status(200).json(params);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = 3030;

app.listen(PORT, async () => {
  console.log("listening on port", PORT);
  await db.sequelize.authenticate();
  console.log("db connected");
});
