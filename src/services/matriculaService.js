const prisma = require("../database/prisma");
const AppError = require("../errors/AppError");

exports.criarMatricula = async ({ alunoId, cursoId }) => {
  const aluno = await prisma.aluno.findUnique({ where: { id: alunoId } });
  if (!aluno) {
    throw new AppError("Aluno inexistente", 404);
  }

  const curso = await prisma.curso.findUnique({ where: { id: cursoId } });
  if (!curso) {
    throw new AppError("Curso inexistente", 404);
  }

  const matriculasAtivas = await prisma.matricula.count({
    where: { alunoId, status: "ativa" }
  });

  if (matriculasAtivas >= 5) {
    throw new AppError("O aluno já atingiu o limite máximo de 5 matrículas ativas", 400);
  }

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

exports.cancelarMatricula = async (id) => {
  const matricula = await prisma.matricula.findUnique({ where: { id } });

  if (!matricula) {
    throw new AppError("Matrícula não encontrada", 404);
  }

  if (matricula.status === "cancelada") {
    throw new AppError("Esta matrícula já se encontra cancelada", 400);
  }

  const matriculaCancelada = await prisma.matricula.update({
    where: { id },
    data: { status: "cancelada" }
  });

  return matriculaCancelada;
};

exports.concluirMatricula = async (id) => {
  const matricula = await prisma.matricula.findUnique({ where: { id } });

  if (!matricula) {
    throw new AppError("Matrícula não encontrada", 404);
  }

  if (matricula.status !== "ativa") {
    throw new AppError("Apenas matrículas ativas podem ser concluídas", 400);
  }

  const matriculaConcluida = await prisma.matricula.update({
    where: { id },
    data: { status: "concluida" }
  });

  return matriculaConcluida;
};