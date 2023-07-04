import multer from 'multer';
import Address from '../models/Address.js';
import Document from '../models/Document.js';
import Dossier from '../models/Dossier.js';
import User from '../models/User.js';

const upload = multer({ dest: 'uploads/' });

export const submitForm = async (req, res) => {

    const user_id = req.headers['x-user-id'];
    const { body: formData, files } = req;

    try {

        const newDossier = await Dossier.create({ id_User: user_id });


        const newAddress = await Address.create({
            address1: formData.address,
            address2: formData.compladdress,
            city: formData.ville,
            department: formData.departement,
            postalCode: formData.codepostal,
        });


        const fileFields = ['idcard', 'domicile', 'impot', 'bulsalaire', 'relevecompte'];

        for (const field of fileFields) {
            if (files[field]) {
                const file = files[field][0];
                await Document.create({
                    file_name: file.originalname,
                    file_size: file.size,
                    file_type: file.mimetype,
                    file_data: file.buffer,
                    Id_Dossier: newDossier.Id_Dossier
                });
            }
        }

        res.json({ success: true, message: 'Formulario recibido y guardado en la base de datos' });
    } catch (err) {
        console.log(err)
        res.json({ success: false, message: "Hubo un error al guardar el formulario", err: err });
    }
}
