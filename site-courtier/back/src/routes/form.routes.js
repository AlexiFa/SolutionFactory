import express from 'express';
import multer from 'multer';
import { submitForm } from '../controllers/form.controller.js';

const upload = multer();
const router = express.Router();

router.post('/submitForm', upload.fields([
  { name: 'idcard', maxCount: 1 },
  { name: 'domicile', maxCount: 1 },
  { name: 'impot', maxCount: 1 },
  { name: 'bulsalaire', maxCount: 1 },
  { name: 'relevecompte', maxCount: 1 }
]), submitForm);

export default router;
