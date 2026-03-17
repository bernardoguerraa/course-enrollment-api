const prisma = require("../database/prisma");
const AppError = require("../errors/AppError");

exports.criarCurso = async (dadosCurso) => {
  const cursoExistente = await prisma.curso.findFirst({
    where: { titulo: dadosCurso.titulo }
  });

  if (cursoExistente) {
    throw new AppError("Já existe um curso com este título", 400);
  }

  const curso = await prisma.curso.create({ data: dadosCurso });
  return curso;
};

exports.listarCursos = async () => {
  const cursos = await prisma.curso.findMany();
  return cursos;
};

exports.buscarCursoPorId = async (id) => {
  const curso = await prisma.curso.findUnique({ where: { id } });
  
  if (!curso) {
    throw new AppError("Curso não encontrado", 404);
  }
  
  return curso;
};

exports.atualizarCurso = async (id, dadosCurso) => {
  await this.buscarCursoPorId(id);

  const cursoAtualizado = await prisma.curso.update({
    where: { id },
    data: dadosCurso
  });

  return cursoAtualizado;
};

exports.deletarCurso = async (id) => {
  await this.buscarCursoPorId(id);
  await prisma.curso.delete({ where: { id } });
};