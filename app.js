const express = require("express");
const app = express();

const { sequelize } = require("./models");

app.get("/categories", (req, res) => {});

const PORT = 3030;

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, async () => {
  console.log("listening on port", PORT);
  await sequelize.authenticate();
  console.log("db connected");
});
