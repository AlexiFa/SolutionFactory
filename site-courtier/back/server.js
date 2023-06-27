import express from 'express';
//import stythc
// import {envs, Client} from 'stytch';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'sequelize';
import bodyParser from "body-parser";

dotenv.config()

const app = express()
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json())



app.listen(3000, () =>{
    console.log("server has start on port 3000")
})


app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email}`
        
    })
})

app.get('/status', (req, res) => {
    res.send({
        message: `Hello`
    })
})


//stych
// app.post('/register', async (req, res) => {
//     const{ email, password} = req.body;

//     try{
//         const resp = await client.passwords.create({
//             email,
//             password,
//             session_duration_minutes: 60
//         })

//         res.jason({
//             success: 
//         })
//     }

// })

// const client = new Client({
//     project_id: process.env.PROJECT_ID,
//     secret: process.env.SECRET,
//     env: envs.test
// })