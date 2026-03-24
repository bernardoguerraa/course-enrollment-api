const { z } = require("zod");

const cursoSchema = z.object({
  titulo: z.string().trim().min(3, "O título deve ter pelo menos 3 caracteres")
});

module.exports = cursoSchema;