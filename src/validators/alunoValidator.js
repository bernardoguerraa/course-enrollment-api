const { z } = require("zod");

const alunoSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido")
});

module.exports = alunoSchema;