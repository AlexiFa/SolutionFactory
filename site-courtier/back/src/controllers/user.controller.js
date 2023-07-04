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

// TODO: tester cette fonction
export const searchUser = async (req, res) => {
    const { email } = req.query;

    try {
        const user = await client.users.search({ 
            limit: 1,
            query: {
                operator: AND, // AND or OR (ca change rien pour cette fonction)
                operands:[
                    {
                        "filter_name": "email_address",
                        "filter_value": email
                    },
                ]
            }
        })
        res.json({
            success: true,
            message: 'User information retrieved successfully',
            searchUser_id: user[0].user_id,
        })
    }catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: "error in search user method",
            err: err
        })
    }
}

/*export const findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "erreur requete SQL"
        });
    });
}*/

/*export const getUserInfoById = async (req, res) => {
    const { user_id } = req.params.id;

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
}*/