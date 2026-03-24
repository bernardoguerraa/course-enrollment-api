const matriculaSchema = require("../validators/matriculaValidator");
const matriculaService = require("../services/matriculaService");

exports.criarMatricula = async (req, res, next) => {
  try {
    const dadosValidados = matriculaSchema.parse(req.body);
    const matricula = await matriculaService.criarMatricula(dadosValidados);
    res.status(201).json(matricula);
  } catch (error) {
    next(error);
  }
};

exports.listarMatriculas = async (req, res, next) => {
  try {
    const matriculas = await matriculaService.listarMatriculas();
    res.json(matriculas);
  } catch (error) {
    next(error);
  }
};

exports.cancelarMatricula = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const matricula = await matriculaService.cancelarMatricula(id);
    res.json(matricula);
  } catch (error) {
    next(error);
  }
};

exports.concluirMatricula = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const matricula = await matriculaService.concluirMatricula(id);
    res.json(matricula);
  } catch (error) {
    next(error);
  }
};