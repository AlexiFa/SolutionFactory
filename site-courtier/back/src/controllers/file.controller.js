import Document from "../models/Document.js";
import Dossier from '../models/Dossier.js';
import User from "../models/User.js";

// Función para obtener un documento específico por su ID.
// export const getDocument = async (req, res) => {
//     try {
//         const document = await Document.findByPk(req.params.id);
//         if (!document) {
//             return res.status(404).json({ success: false, message: 'Documento no encontrado' });
//         }

//         // Establecer el tipo de contenido correcto y devolver los datos del archivo.
//         res.set('Content-Type', document.file_type);
//         res.send(document.file_data);
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: 'Error al obtener el documento', error: err });
//     }
// };

// export const getUserDocuments = async (req, res) => {
//     try {
//         const dossier = await Dossier.findOne({ where: { id_User: req.user.id } });
//         const documents = await Document.findAll({ where: { Id_Dossier: dossier.Id_Dossier } });

//         // Devolver los documentos en formato JSON.
//         res.json(documents);
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: 'Error al obtener los documentos del usuario', error: err });
//     }
// };

// import Document from '../models/Document.js';
// import Dossier from '../models/Dossier.js';

// export const getUserDocuments = async (req, res) => {
//     const { user_id } = req.query;
//     try {

//         // const documents = await Document.findAll({ where: { Id_Dossier: dossier.Id_Dossier } });
//         // const dossier = await Dossier.findOne({ where: { id_User: user_id} });

//         const dossier = await Dossier.findOne({ where: { id_User: user_id} });
//         const documents = await Document.findAll({ where: { Id_Dossier: 7 } });


        
//         // Devolver los documentos en formato JSON.
//         res.json(documents);
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: 'Error al obtener los documentos del usuario', error: err });
//     }
// };
export const getUserDocuments = async (req, res) => {
    const { dossierId } = req.query;
    try {
      const documents = await Document.findAll({ where: { Id_Dossier: dossierId } });
      res.json(documents);
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: 'Error al obtener los documentos del usuario', error: err });
    }
  };

export const serveDocument = async (req, res) => {
    try {
        const document = await Document.findByPk(req.params.id);

        // Configura el tipo de contenido y el nombre del archivo.
        res.setHeader('Content-Type', document.file_type);
        res.setHeader('Content-Disposition', `inline; filename=${document.file_name}`);

        // Envia el archivo.
        res.send(document.file_data);
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: 'Error al servir el documento', error: err });
    }
};
