const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  console.log("Populando banco...");

  const alunos = await prisma.aluno.createMany({
    data: [
      { nome: "Bernardo Costa", email: "bernardo@email.com" },
      { nome: "Ana Souza", email: "ana@email.com" },
      { nome: "Carlos Pereira", email: "carlos@email.com" },
      { nome: "Juliana Lima", email: "juliana@email.com" },
      { nome: "Pedro Martins", email: "pedro@email.com" }
    ]
  });

  const cursos = await prisma.curso.createMany({
    data: [
      { titulo: "Banco de Dados" },
      { titulo: "Estrutura de Dados" },
      { titulo: "Programação Orientada a Objetos" },
      { titulo: "Algoritmos" },
      { titulo: "Engenharia de Software" }
    ]
  });

  await prisma.matricula.createMany({
    data: [
      { alunoId: 1, cursoId: 1 },
      { alunoId: 1, cursoId: 2 },
      { alunoId: 2, cursoId: 1 },
      { alunoId: 3, cursoId: 3 },
      { alunoId: 4, cursoId: 4 },
      { alunoId: 5, cursoId: 5 }
    ]
  });

  console.log("Banco populado com sucesso");

}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });