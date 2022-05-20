const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");

const indexRouter = require("./routes/indexRouter");

app.use(cors());

app.use("/", indexRouter);

const PORT = 3030;

app.listen(PORT, async () => {
  console.log("listening on port", PORT);
  await db.sequelize.authenticate();
  console.log("db connected");
});
