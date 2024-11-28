import express from "express"
import itemController from "../controllers/itemController.js"

const router = express.Router()

router.post('/items', itemController.creatItem)
router.get('/items', itemController.getItems)

export default router