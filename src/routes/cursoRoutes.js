const express = require("express");
const cursoController = require("../controllers/cursoController"); 

const router = express.Router();

router.post("/", cursoController.criarCurso);
router.get("/", cursoController.listarCursos);
router.get("/:id", cursoController.buscarCursoPorId);
router.put("/:id", cursoController.atualizarCurso);
router.delete("/:id", cursoController.deletarCurso);

module.exports = router;