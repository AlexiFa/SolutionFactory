import express from 'express';
import { register, login, logout, authenticate } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/authenticate', authenticate);
router.post('/logout', logout);

export default router;
