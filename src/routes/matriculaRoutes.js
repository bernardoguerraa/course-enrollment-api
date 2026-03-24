const express = require("express");
const matriculaController = require("../controllers/matriculaController");

const router = express.Router();

router.post("/", matriculaController.criarMatricula);
router.get("/", matriculaController.listarMatriculas);
router.patch("/:id/cancelar", matriculaController.cancelarMatricula);
router.patch("/:id/concluir", matriculaController.concluirMatricula);

module.exports = router;