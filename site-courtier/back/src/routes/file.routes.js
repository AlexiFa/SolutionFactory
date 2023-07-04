import express from 'express';
import { getUserDocuments, serveDocument } from '../controllers/file.controller.js';

const router = express.Router();

router.get('/userDocuments', getUserDocuments);
router.get('/serveDocument/:id', serveDocument);

export default router;
