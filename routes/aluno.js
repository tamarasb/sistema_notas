import express from "express"
const router = express.Router()

import AlunoController from "../controllers/AlunoController.js"

router.get("/", AlunoController.index)

router.get("/cadastrar", AlunoController.cadastrar)

router.post("/salvar", AlunoController.salvar)

export default router