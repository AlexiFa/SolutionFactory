import multer from 'multer';
import Address from '../models/Address.js';
import Document from '../models/Document.js';
import Dossier from '../models/Dossier.js';
import User from '../models/User.js';

const upload = multer({ dest: 'uploads/' });

export const submitForm = async (req, res) => {
    // const user_id = req.headers['x-user-id'];
    // const { id } = req.body; // obteniendo id de cuerpo de la solicitud

    // // Ahora puedes usar este user_id para asociar el formulario con el usuario
    // // asegúrate de que tanto user_id como id están definidos antes de usarlos
    // if (user_id && id) {
    //   // lógica de tu controlador aquí
    // } else {
    //   console.log('user_id o id no están definidos');
    // }
    const user_id = req.headers['x-user-id'];
    const { body: formData, files } = req;

    try {
        // Aquí necesitarás el id del usuario, asumiendo que ya lo tienes en req.user.id
        const userId = User.id_User;

        // crea un nuevo Dossier para este usuario
        const newDossier = await Dossier.create({ id_User: user_id });

        // guarda la dirección del formulario en la base de datos
        const newAddress = await Address.create({
            address1: formData.address,
            address2: formData.compladdress,
            city: formData.ville,
            department: formData.departement,
            postalCode: formData.codepostal,
        });

        // los siguientes son los nombres de los campos de archivo en tu formulario
        const fileFields = ['idcard', 'domicile', 'impot', 'bulsalaire', 'relevecompte'];

        // guarda los archivos cargados en la base de datos
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
