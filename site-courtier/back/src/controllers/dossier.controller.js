import Dossier from '../models/Dossier.js';
import sequelize from '../config/db.config.js';
import User from '../models/User.js';


export const getDossierClient = async (req, res) => {

    const { user_id } = req.query;

    Dossier.findAll({where:{id_User:user_id}}).then(data =>{
        res.json(data)

    }).catch(err =>{
        console.log(err);
        res.status(500).json({error:"erreur requete SQL"})
    })
}

// export const getDossierCourtier = async (req, res) => {

//     Dossier.findAll().then(data =>{
//         res.json(data)
//     }).catch(err =>{
//         console.log(err);
//         res.status(500).json({error:"erreur requete SQL"})
//     })
// }
export const getDossierCourtier = async (req, res) => {
    Dossier.findAll({
      include: [
        {
          model: User,
          as: 'User' // asegúrate de que este es el nombre correcto para la relación
        }
      ]
    }).then(data =>{
        res.json(data)
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error:"erreur requete SQL"})
    })
}