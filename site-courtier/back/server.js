import express from 'express';
// import stythc;
import {envs, Client, UserSearchOperator} from 'stytch';
import dotenv from 'dotenv';
import cors from 'cors';
// import { json } from 'sequelize';
// import bodyParser from "body-parser";

dotenv.config()

const app = express()


// app.use(bodyParser.json())






// app.post('/register', (req,res) => {
//     res.send({
//         message: `Hello ${req.body.email}`
        
//     })
// })

// app.get('/status', (req, res) => {
//     res.send({
//         message: `Hello`
//     })
// })


//stych

const client = new Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: envs.test
})

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const{ email, password, first_name, last_name, role} = req.body;

    try{
        const resp = await client.passwords.create({
            email,
            password,
            name: {first_name, last_name},
            trusted_metadata: {role},
            session_duration_minutes: 60,
            
        })

        res.json({
            success: true,
            message: 'User created successfuly ',
            token: resp.session_token
        })
    }catch (err) {
        console.log(err);

        res.json({
            success: false,
            messgae: err.error_message,
            err: err
        })
    }

})



app.post('/login', async (req, res) => {
    const{ email, password} = req.body;

    try{
        const resp = await client.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60
        })

        res.json({
            success: true,
            message: 'User loged in successfuly ',
            token: resp.session_token
        })
    }catch (err) {
        console.log(err);

        res.json({
            success: false,
            messgae: err.error_message,
            err: err
        })
    }

})

app.post('/authenticate', async (req, res) => {
    const{ session_token} = req.body;

    try{
        await client.sessions.authenticate({
            session_token
        })

        res.json({
            success: true,
            message: 'Token is valid ',
        })
    }catch (err) {
        console.log(err);

        res.json({
            success: false,
            messgae: err.error_message,
            err: err
        })
    }

})

app.post('/logout', async (req, res) => {
    const{ session_token} = req.body;
  
    try {
      await client.sessions.revoke({session_token});
      res.json({success: true, message: 'Succesfuly log out ',});
    } catch (err) {
      console.log(err);

      if (err.error_message === 'No session found') {
        res.json({
          success: false,
          message: err.error_message,
          err: err,
          clearToken: true, 
        });
      } else {
        res.json({
          success: false,
          message: err.error_message,
          err: err
        });
      }
    }
  });




app.post('/searchUser', async (req, res) => {
    const {filter_value} = req.body;
    try {
        const user = await client.user.search({
            limit : 5, 
            query: {operator, operands},
            operator : UserSearchOperator.AND,
            operands :
            // [
                // {filter_name: "user_id", filter_value},
                // {filter_name: "phone_number", filter_value},
                // {filter_name: "full_name_fuzzy", filter_value},
                {filter_name: "email_address", filter_value}
            // ]
        })
        res.json({
            success : true,
            messgae: 'Search correctly',
            user: user.results
        })
        
    }catch (err){
        console.log(err)
        res.json({
            success: false,
            message: "error in search method",
            err: err
        })
    }
})



app.listen(3000, () =>{
    console.log("server has start on port 3000")
})



