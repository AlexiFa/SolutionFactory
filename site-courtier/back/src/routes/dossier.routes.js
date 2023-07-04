import Express from "express";
import { getDossierClient, getDossierCourtier } from "../controllers/dossier.controller.js";


const router = Express.Router();

router.get("/getdossierclient", getDossierClient);
router.get("/getdossiercourtier", getDossierCourtier);

export default router;
