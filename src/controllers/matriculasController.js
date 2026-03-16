const prisma = require("../database/prisma");

exports.criarMatricula = async (req, res) => {
  try {

    const { alunoId, cursoId } = req.body;

    const matriculaExistente = await prisma.matricula.findFirst({
      where: {
        alunoId,
        cursoId
      }
    });

    if (matriculaExistente) {
      return res.status(400).json({
        error: "Aluno já matriculado neste curso"
      });
    }

    const matricula = await prisma.matricula.create({
      data: {
        alunoId,
        cursoId
      }
    });

    exports.listarMatriculas = async (req, res) => {
  try {

    const matriculas = await prisma.matricula.findMany({
      include: {
        aluno: true,
        curso: true
      }
    });

    res.json(matriculas);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar matrículas" });
  }
};

    res.status(201).json(matricula);

  } catch (error) {
    res.status(500).json({ error: "Erro ao criar matrícula" });
  }
};