const express = require("express");

const alunosController = require("../controllers/alunosController");
const cursosController = require("../controllers/cursosController");
const matriculasController = require("../controllers/matriculasController");

const router = express.Router();

router.post("/alunos", alunosController.criarAluno);
router.get("/alunos", alunosController.listarAlunos);

router.post("/cursos", cursosController.criarCurso);
router.get("/cursos", cursosController.listarCursos);

router.post("/matriculas", matriculasController.criarMatricula);
router.get("/", matriculasController.listarMatriculas);

module.exports = router;