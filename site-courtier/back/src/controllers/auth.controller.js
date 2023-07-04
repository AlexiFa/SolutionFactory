import { Client } from 'stytch';
import dotenv from 'dotenv';
import User from '../models/User.js';





dotenv.config()

const client = new Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: process.env.ENV,
})

export const register = async (req, res) => {
    const { email, password, first_name, last_name, role } = req.body;

    try {
        const resp = await client.passwords.create({
            email,
            password,
            name: { first_name, last_name },
            trusted_metadata: { role },
            session_duration_minutes: 60,

        })

        // Créer un utilisateur de maniere local
        const newUser = await User.create({
            id_User: resp.user_id,
            nom: first_name + ' ' + last_name,
            mail: email,
            login: email, 
            password, //On garde de maniere local le mot de passe pour des motif de teste, mais pas pour un produit final
            userType: role, 
        });

        res.json({
            success: true,
            message: 'User created successfully ',
            token: resp.session_token,
            user_id: resp.user_id,
            newUser

        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const resp = await client.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60
        })

        // Chercher l'utilisateur dans la base local
        const user = await User.findOne({
            where: {
                login: email,
            },
        });

        if (!user) {
            return res.json({
                success: false,
                message: 'User not found in local database',
            });
        }

        res.json({
            success: true,
            message: 'User logged in successfully ',
            token: resp.session_token,
            user_id: resp.user_id,
            user
        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
};

export const logout = async (req, res) => {
    const { session_token } = req.body;

    try {
        await client.sessions.revoke({ session_token });
        res.json({ success: true, message: 'Successfully log out ', });
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
};

export const authenticate = async (req, res) => {
    const { session_token } = req.body;

    if (!session_token || typeof session_token !== 'string') {
        return res.json({
            success: false,
            message: 'Session token format is invalid.'
        })
    }

    try {
        await client.sessions.authenticate({
            session_token
        })

        res.json({
            success: true,
            message: 'Token is valid ',
        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
}
