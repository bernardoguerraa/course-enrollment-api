const matriculaService = require("../services/matriculaService");

exports.criarMatricula = async (req, res, next) => {
  try {
    const { alunoId, cursoId } = req.body;
    const matricula = await matriculaService.criarMatricula({ alunoId, cursoId });
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

exports.deletarMatricula = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await matriculaService.deletarMatricula(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};