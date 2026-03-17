const alunoSchema = require("../validators/alunoValidator");
const alunoService = require("../services/alunoService");

exports.criarAluno = async (req, res, next) => {
  try {
    const dadosValidados = alunoSchema.parse(req.body);
    const aluno = await alunoService.criarAluno(dadosValidados);
    res.status(201).json(aluno);
  } catch (error) {
    next(error);
  }
};

exports.listarAlunos = async (req, res, next) => {
  try {
    const alunos = await alunoService.listarAlunos();
    res.json(alunos);
  } catch (error) {
    next(error);
  }
};

exports.buscarAlunoPorId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const aluno = await alunoService.buscarAlunoPorId(id);
    res.json(aluno);
  } catch (error) {
    next(error);
  }
};

exports.atualizarAluno = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const dadosValidados = alunoSchema.parse(req.body);
    const aluno = await alunoService.atualizarAluno(id, dadosValidados);
    res.json(aluno);
  } catch (error) {
    next(error);
  }
};

exports.deletarAluno = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await alunoService.deletarAluno(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};