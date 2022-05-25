const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");

const indexRouter = require("./routes/indexRouter");

app.use(cors());

app.use("/", indexRouter);

const PORT = 5000;

app.listen(PORT, async () => {
  console.log("listening on port", PORT);
  await db.sequelize.authenticate();
  console.log("db connected");
});
