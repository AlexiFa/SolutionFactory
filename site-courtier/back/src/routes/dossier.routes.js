import Express from "express";
import { getDossier } from "../controllers/dossier.controller.js";

const router = Express.Router();

router.get("/getdossier", getDossier);

export default router;
