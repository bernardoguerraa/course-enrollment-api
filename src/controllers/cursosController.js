const prisma = require("../database/prisma");

exports.criarCurso = async (req, res) => {
  const { titulo } = req.body;

  const curso = await prisma.curso.create({
    data: { titulo }
  });

  res.status(201).json(curso);
};

exports.listarCursos = async (req, res) => {
  const cursos = await prisma.curso.findMany();
  res.json(cursos);
};