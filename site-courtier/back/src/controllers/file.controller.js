import Document from "../models/Document.js";
import Dossier from '../models/Dossier.js';
import User from "../models/User.js";


// export const getUserDocuments = async (req, res) => {
//     const { dossierId } = req.query;
//     try {
//       const documents = await Document.findAll({ where: { Id_Dossier: dossierId } });
//       res.json(documents);
//     } catch (err) {
//       console.log(err);
//       res.json({ success: false, message: 'Error al obtener los documentos del usuario', error: err });
//     }
//   };

export const getUserDocuments = async (req, res) => {
  const { dossierId } = req.query;
  try {
      const documents = await Document.findAll({
          where: { Id_Dossier: dossierId },
          include: [
              {
                  model: Dossier,
                  as: 'Dossier', // este asume que has definido este alias en tu modelo Dossier
                  include: [
                      {
                          model: User,
                          as: 'User' // este asume que has definido este alias en tu modelo User
                      }
                  ]
              }
          ]
      });
      res.json(documents);
  } catch (err) {
      console.log(err);
      res.json({ success: false, message: 'Error al obtener los documentos del usuario', error: err });
  }
};


export const serveDocument = async (req, res) => {
    try {
        const document = await Document.findByPk(req.params.id);

        
        res.setHeader('Content-Type', document.file_type);
        res.setHeader('Content-Disposition', `inline; filename=${document.file_name}`);

        
        res.send(document.file_data);
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: 'Error al servir el documento', error: err });
    }
};
