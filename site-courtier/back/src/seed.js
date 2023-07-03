// seed.js

import sequelize from '../src/config/db.config.js'; 

async function seed() {
  // Données pour test
  const users = [
    { nom: 'John Doe', mail: 'john@mail.com', login: 'john', password: '123456', userType: 1 },
  ];

  const dossiers = [
    { Id_Dossier: 1, id_Client: 1,  },
  ];


  const documents = [
    { file_name: 'example.pdf', file_size: '15MB', file_type: 'pdf', file_data: null, Id_Dossier: 1 },
  ];

  const addresses = [
    { address1: '123 Main St', city: 'Townsville', postalCode: '12345', user_id: 1 },
  ];

  for (const user of users) {
    await sequelize.query(
      'INSERT INTO Clients (nom, mail, login, password, userType) VALUES (?, ?, ?, ?, ?)',
      { replacements: [user.nom, user.mail, user.login, user.password, user.userType] }
    );
  }

  for (const dossier of dossiers) {
    await sequelize.query(
      'INSERT INTO Dossier (Id_Dossier, id_Client /*, otros campos aquí */) VALUES (?, ?)',
      { replacements: [dossier.Id_Dossier, dossier.id_Client ] }
    );
  }


  for (const document of documents) {
    await sequelize.query(
      'INSERT INTO Documents (file_name, file_size, file_type, file_data, Id_Dossier) VALUES (?, ?, ?, ?, ?)',
      { replacements: [document.file_name, document.file_size, document.file_type, document.file_data, document.Id_Dossier] }
    );
  }

  for (const address of addresses) {
    await sequelize.query(
      'INSERT INTO Addresses (address1, city, postalCode, user_id) VALUES (?, ?, ?, ?)',
      { replacements: [address.address1, address.city, address.postalCode, address.user_id] }
    );
  }

  console.log('Datos de prueba insertados con éxito');
}


seed();
