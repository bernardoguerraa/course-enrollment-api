const express = require("express");
const alunoController = require("../controllers/alunoController"); 

const router = express.Router();

router.post("/", alunoController.criarAluno);
router.get("/", alunoController.listarAlunos);
router.get("/:id", alunoController.buscarAlunoPorId);
router.put("/:id", alunoController.atualizarAluno);
router.delete("/:id", alunoController.deletarAluno);

module.exports = router;