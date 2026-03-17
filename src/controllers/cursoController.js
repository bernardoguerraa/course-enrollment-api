const cursoService = require("../services/cursoService");

exports.criarCurso = async (req, res, next) => {
  try {
    const { titulo } = req.body;
    const curso = await cursoService.criarCurso({ titulo });
    res.status(201).json(curso);
  } catch (error) {
    next(error);
  }
};

exports.listarCursos = async (req, res, next) => {
  try {
    const cursos = await cursoService.listarCursos();
    res.json(cursos);
  } catch (error) {
    next(error);
  }
};

exports.buscarCursoPorId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const curso = await cursoService.buscarCursoPorId(id);
    res.json(curso);
  } catch (error) {
    next(error);
  }
};

exports.atualizarCurso = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const curso = await cursoService.atualizarCurso(id, req.body);
    res.json(curso);
  } catch (error) {
    next(error);
  }
};

exports.deletarCurso = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await cursoService.deletarCurso(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};