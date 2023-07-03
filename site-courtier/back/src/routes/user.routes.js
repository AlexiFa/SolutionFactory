import express from 'express';
import { getUserInfo } from '../controllers/user.controller.js';



const router = express.Router();

router.get('/userinfo', getUserInfo);


export default router;
