const alunoSchema = require("../validators/alunoValidator");
const prisma = require("../database/prisma");

exports.criarAluno = async (req, res) => {
  try {

    const dadosValidados = alunoSchema.parse(req.body);

    const aluno = await prisma.aluno.create({
      data: dadosValidados
    });

    res.status(201).json(aluno);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar alunos" });
  }
};