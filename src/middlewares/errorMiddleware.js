const AppError = require("../errors/AppError");

function errorMiddleware(err, req, res, next) {
  console.error(err); 

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      statusCode: err.statusCode
    });
  }

  if (err.name === "ZodError") {
    return res.status(400).json({
      error: "Erro de validação de dados",
      statusCode: 400,
      issues: err.format() 
    });
  }

  return res.status(500).json({
    error: "Erro interno do servidor",
    statusCode: 500
  });
}

module.exports = errorMiddleware;