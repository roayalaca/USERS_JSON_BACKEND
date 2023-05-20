import { Router } from "express";
import {  getDetail, updateInfo, logIn  } from "../controllers/user.controllers.js";

const router = Router()

router.post("/users/login", logIn)
router.get("/detail/:id", getDetail);
router.put("/detail/update/:id", updateInfo);



export default router;