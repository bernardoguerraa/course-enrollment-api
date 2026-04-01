const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Importações do Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(cors());
app.use(express.json());

// Rota da documentação (deve vir antes das rotas principais)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);
app.use(errorMiddleware);

module.exports = app;