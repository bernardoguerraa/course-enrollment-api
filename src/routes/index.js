const express = require("express");

const alunoRoutes = require("./alunoRoutes");
const cursoRoutes = require("./cursoRoutes");
const matriculaRoutes = require("./matriculaRoutes");

const router = express.Router();

router.use("/alunos", alunoRoutes);
router.use("/cursos", cursoRoutes);
router.use("/matriculas", matriculaRoutes);

module.exports = router;