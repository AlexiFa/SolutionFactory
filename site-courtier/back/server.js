import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from '../back/src/routes/auth.routes.js'
import userRoutes from '../back/src/routes/user.routes.js'
import addressRoutes from '../back/src/routes/address.routes.js'
import dossierRoutes from '../back/src/routes/dossier.routes.js'
import formRoutes from '../back/src/routes/form.routes.js'
import fileRouter from '../back/src/routes/file.routes.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/dossier', dossierRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/documents', fileRouter);


app.listen(port, () =>{
    console.log(`Server has started on port ${port}`)
})
