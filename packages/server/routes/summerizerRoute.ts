import { Router } from "express";
import { summerizerControllers } from "../controllers/summerizerController";

const router = Router()

const {summerize} = summerizerControllers

router.get('/api/summerize', summerize)

export default router;