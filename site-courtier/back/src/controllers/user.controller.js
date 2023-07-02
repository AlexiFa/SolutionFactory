import { Client } from 'stytch';
import dotenv from 'dotenv';

dotenv.config()

const client = new Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: process.env.ENV,
})

export const getUserInfo = async (req, res) => {
    const { user_id } = req.query;

    try {
        const user = await client.users.get(user_id)
        res.json({
            success: true,
            message: 'User information retrieved successfully',
            user: user
        })
    } catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: "error in get user method",
            err: err
        })
    }
}
