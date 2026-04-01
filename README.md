Um sistema backend robusto desenvolvido em Node.js para o gerenciamento de alunos, cursos e matrículas. Esta API adota uma arquitetura em camadas (Controllers, Services) e implementa regras de negócio complexas, validação de dados e tratamento centralizado de erros.

## 🚀 Tecnologias Utilizadas

* **Node.js** & **Express**: Construção do servidor e roteamento da API.
* **Prisma ORM**: Modelagem do banco de dados e consultas seguras.
* **SQLite**: Banco de dados relacional leve (ideal para desenvolvimento).
* **Zod**: Validação rigorosa de schemas e dados de entrada (req.body).
* **Nodemon**: Automação do ambiente de desenvolvimento.

## ⚙️ Arquitetura e Padrões

O projeto foi refatorado para seguir as melhores práticas de mercado:
* **Isolamento de Responsabilidades:** Separação clara entre Rotas, Controllers (recebem a requisição) e Services (regras de negócio).
* **Tratamento de Erros:** Middleware global (`errorMiddleware.js`) e classe customizada (`AppError.js`) para padronizar respostas de erro no formato `{ "error": "Mensagem", "statusCode": 400 }`.
* **Fail-Fast Validation:** O Zod intercepta e barra dados inválidos antes mesmo de chegarem às regras de negócio.

## 🛡️ Regras de Negócio Implementadas

* **Alunos:** Validação de e-mail único e formato de dados obrigatórios.
* **Cursos:** Títulos não podem ser vazios ou duplicados.
* **Matrículas:**
  * Um aluno não pode se matricular duas vezes no mesmo curso.
  * Validação de existência de Aluno e Curso antes da matrícula.
  * Limite máximo de **5 matrículas ativas** por aluno.
  * Mudança de status (`ativa`, `concluida`, `cancelada`) em vez de exclusão direta do banco.
  * Apenas matrículas ativas podem ser concluídas.
