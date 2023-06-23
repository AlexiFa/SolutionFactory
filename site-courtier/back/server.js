import express from 'express';
import {envs, Client} from 'stytch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

// const express = require("express")

const app = express()

const client = new Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: envs.test
})



app.listen(3000, () =>{
    console.log("server has start")
})

app.use(cors());
app.use(express.json());

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