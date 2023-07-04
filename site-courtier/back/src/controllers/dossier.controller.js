import Dossier from '../models/Dossier.js';
import sequelize from '../config/db.config.js';
//import dotenv from 'dotenv';

//dotenv.config()

export const getDossier = async (req, res) => {
    // const query = `SELECT * FROM dossier`;

    /*sequelize.query(query, (err, rows) => {
        if(err){
            console.log("erreur requete SQL",err);
            res.status(500).json({error:"erreur requete SQL"})
        }else{
            /*const dossiers = rows[0];
            const items = dossiers.map((dossier) => {
                return {
                    id: dossier.Id_Dossier,
                    id_User: dossier.id_User,
                };
            });
            res.json(items)*//*
            res.json(rows)
        }
    })*/
    Dossier.findAll().then(data =>{
        res.json(data)
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error:"erreur requete SQL"})
    })
}