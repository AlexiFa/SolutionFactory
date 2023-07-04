import express from 'express';
import { getUserInfo, /*findOne*/ } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/userinfo', getUserInfo);
//router.get('/:id', findOne)

export default router;
