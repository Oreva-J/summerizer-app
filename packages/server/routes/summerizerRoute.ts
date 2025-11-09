import { Router } from "express";
import { summerizerControllers } from "../controllers/summerizerController.js";

const router = Router()

const {summerize} = summerizerControllers

router.get('/api/summerize', summerize)

export default router;