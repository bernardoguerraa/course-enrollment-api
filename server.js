const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./src/middlewares/errorMiddleware");

const routes = require("./src/routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});