import { Router } from "express";
import { getBalance } from "../controllers/balance.controllers.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router()

router.get("/detail/balance/:id", authenticate, getBalance);

export default router;