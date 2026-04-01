# 🎓 API de Gerenciamento de Matrículas

Um sistema backend robusto desenvolvido em Node.js para o gerenciamento de alunos, cursos e matrículas. Esta API adota uma arquitetura em camadas (Controllers, Services) e implementa regras de negócio complexas, validação de dados com Zod e tratamento centralizado de erros.

## 🚀 Tecnologias Utilizadas

* **Node.js** & **Express**: Construção do servidor e roteamento da API.
* **Prisma ORM**: Modelagem do banco de dados e consultas seguras.
* **SQLite**: Banco de dados relacional.
* **Zod**: Validação rigorosa de schemas e dados de entrada.
* **Swagger**: Documentação interativa da API.

## ⚙️ Arquitetura e Padrões

O projeto foi construído seguindo as melhores práticas de mercado:
* **Isolamento de Responsabilidades:** Separação clara entre Rotas, Controllers e Services (Regras de negócio).
* **Tratamento Global de Erros:** Middleware customizado (`errorMiddleware.js`) e classe `AppError` para padronizar respostas HTTP.
* **Fail-Fast Validation:** O Zod intercepta e barra dados inválidos antes mesmo de chegarem às regras de negócio ou ao banco de dados.

## 🛡️ Regras de Negócio Implementadas

* **Alunos:** Validação de e-mail único.
* **Cursos:** Títulos não podem ser vazios ou duplicados.
* **Matrículas:**
  * Validação de existência de Aluno e Curso antes da matrícula.
  * Um aluno não pode se matricular duas vezes no mesmo curso.
  * Limite máximo de **5 matrículas ativas** por aluno.
  * Gestão de status (`ativa`, `concluida`, `cancelada`).
  * Apenas matrículas ativas podem ser concluídas.

---

## 🌐 Deploy e Documentação (Swagger)

A API está documentada e hospedada publicamente. Você pode testar todas as rotas diretamente pelo navegador usando o Swagger.

👉 **[Acessar a Documentação Interativa (Swagger)](https://course-enrollment-api-px5r.onrender.com/api-docs)**

* **URL Base da API:** `https://course-enrollment-api-px5r.onrender.com`
* **Hospedagem:** Render (Web Service)

> **⚠️ Nota:** > Como a aplicação utiliza SQLite no plano gratuito do Render (que possui discos efêmeros), o banco de dados é reiniciado a cada novo deploy ou inatividade do servidor. Para testar o sistema pelo Swagger na nuvem, comece criando um novo Aluno (`POST /alunos`) e um novo Curso (`POST /cursos`) antes de testar a criação de Matrículas.

---

## 💻 Como Rodar o Projeto Localmente

**1. Clone o repositório:**

git clone [https://github.com/bernardoguerraa/course-enrollment-api.git]

**2. Instale as dependências:**

npm install

**3. Configure o Banco de Dados:**

npx prisma migrate dev

**4. Inicie o Servidor:**

npm run dev

## 📡 Resumo dos Endpoints

| Recurso | Método | Rota | Descrição |
| :--- | :--- | :--- | :--- |
| **Alunos** | `POST` | `/alunos` | Cadastra um novo aluno |
| | `GET` | `/alunos` | Lista todos os alunos |
| | `GET` | `/alunos/:id` | Busca um aluno específico |
| | `PUT` | `/alunos/:id` | Atualiza os dados do aluno |
| | `DELETE`| `/alunos/:id` | Remove um aluno |
| **Cursos** | `POST` | `/cursos` | Cadastra um novo curso |
| | `GET` | `/cursos` | Lista todos os cursos |
| | `GET` | `/cursos/:id` | Busca um curso específico |
| | `PUT` | `/cursos/:id` | Atualiza o curso |
| | `DELETE`| `/cursos/:id` | Remove um curso |
| **Matrículas** | `POST` | `/matriculas` | Matricula um aluno |
| | `GET` | `/matriculas` | Lista matrículas cadastradas |
| | `PATCH`| `/matriculas/:id/cancelar`| Cancela uma matrícula |
| | `PATCH`| `/matriculas/:id/concluir`| Conclui uma matrícula |

## Configurações de Deploy no Render (Referência)

Build Command: npm install && npx prisma generate && npx prisma migrate deploy

Start Command: node src/server.js

Variáveis de Ambiente: DATABASE_URL="file:./dev.db"

## 👨‍💻 Autor

Desenvolvido por Bernardo Guerra.

