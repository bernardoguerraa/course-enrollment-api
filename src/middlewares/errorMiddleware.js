const AppError = require("../errors/AppError");

function errorMiddleware(err, req, res, next) {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }

  if (err.name === "ZodError") {
    return res.status(400).json({
      status: "error",
      message: "Erro de validação de dados",
      issues: err.format() 
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor"
  });
}

module.exports = errorMiddleware;