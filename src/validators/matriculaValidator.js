const { z } = require("zod");

const matriculaSchema = z.object({
  alunoId: z.number().int().positive("O ID do aluno é obrigatório e deve ser positivo"),
  cursoId: z.number().int().positive("O ID do curso é obrigatório e deve ser positivo")
});

module.exports = matriculaSchema;