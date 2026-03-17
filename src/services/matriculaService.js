const prisma = require("../database/prisma");
const AppError = require("../errors/AppError");

exports.criarMatricula = async ({ alunoId, cursoId }) => {
  const matriculaExistente = await prisma.matricula.findFirst({
    where: { alunoId, cursoId }
  });

  if (matriculaExistente) {
    throw new AppError("Aluno já matriculado neste curso", 400);
  }

  const matricula = await prisma.matricula.create({
    data: { alunoId, cursoId }
  });

  return matricula;
};

exports.listarMatriculas = async () => {
  const matriculas = await prisma.matricula.findMany({
    include: { aluno: true, curso: true }
  });
  return matriculas;
};

exports.deletarMatricula = async (id) => {
  const matricula = await prisma.matricula.findUnique({ where: { id } });

  if (!matricula) {
    throw new AppError("Matrícula não encontrada", 404);
  }

  await prisma.matricula.delete({ where: { id } });
};