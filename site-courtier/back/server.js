import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from '../back/src/routes/auth.routes.js'
import userRoutes from '../back/src/routes/user.routes.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () =>{
    console.log(`Server has started on port ${port}`)
})





