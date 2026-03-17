const express = require("express");
const matriculaController = require("../controllers/matriculaController"); 

const router = express.Router();

router.post("/", matriculaController.criarMatricula);
router.get("/", matriculaController.listarMatriculas);
router.delete("/:id", matriculaController.deletarMatricula);

module.exports = router;