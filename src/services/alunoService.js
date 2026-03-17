const prisma = require("../database/prisma");
const AppError = require("../errors/AppError");

exports.criarAluno = async (dadosAluno) => {
  if (dadosAluno.email) {
    const emailExistente = await prisma.aluno.findUnique({
      where: { email: dadosAluno.email }
    });

    if (emailExistente) {
      throw new AppError("Este e-mail já está em uso por outro aluno", 400);
    }
  }

  const aluno = await prisma.aluno.create({ data: dadosAluno });
  return aluno;
};

exports.listarAlunos = async () => {
  const alunos = await prisma.aluno.findMany();
  return alunos;
};

exports.buscarAlunoPorId = async (id) => {
  const aluno = await prisma.aluno.findUnique({ where: { id } });
  
  if (!aluno) {
    throw new AppError("Aluno não encontrado", 404);
  }
  
  return aluno;
};

exports.atualizarAluno = async (id, dadosAluno) => {
  await this.buscarAlunoPorId(id); 

  const alunoAtualizado = await prisma.aluno.update({
    where: { id },
    data: dadosAluno
  });

  return alunoAtualizado;
};

exports.deletarAluno = async (id) => {
  await this.buscarAlunoPorId(id);

  await prisma.aluno.delete({ where: { id } });
};