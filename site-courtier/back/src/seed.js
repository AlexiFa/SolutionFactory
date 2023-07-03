// seed.js

import sequelize from '../src/config/db.config.js'; 

async function seed() {
  // Données pour test
  const users = [
    { nom: 'John Doe', mail: 'john@mail.com', login: 'john', password: '123456', telephone: '1234567890', prenom: 'John', userType: 'CLIENT' },
    { nom: 'Jane Doe', mail: 'jane@mail.com', login: 'jane', password: 'abcdef', telephone: '2345678901', prenom: 'Jane', userType: 'CLIENT' },
    { nom: 'Bob Smith', mail: 'bob@mail.com', login: 'bob', password: '123abc', telephone: '3456789012', prenom: 'Bob', userType: 'CLIENT' },
    { nom: 'Alice Johnson', mail: 'alice@mail.com', login: 'alice', password: 'abc123', telephone: '4567890123', prenom: 'Alice', userType: 'CLIENT' },
    { nom: 'Charlie Brown', mail: 'charlie@mail.com', login: 'charlie', password: 'password', telephone: '5678901234', prenom: 'Charlie', userType: 'CLIENT' },
    { nom: 'Courtier Courtier', mail: 'courtier@mail.com', login: 'courtier@gmail.com', password: 'Courtier123!', telephone: '', prenom: '', userType: 'COURTIER' },
  ];

  const dossiers = [
    { Id_Dossier: 1, id_User: 1 },
    { Id_Dossier: 2, id_User: 2 },
    { Id_Dossier: 3, id_User: 3 },
    { Id_Dossier: 4, id_User: 4 },
    { Id_Dossier: 5, id_User: 5 },
  ];

  const documents = [
    { file_name: 'example.pdf', file_size: '15MB', file_type: 'pdf', file_data: null, Id_Dossier: 1 },
  ];

  const addresses = [
    { address1: '123 Main St', city: 'Townsville', postalCode: '12345', user_id: 1 },
  ];

  for (const user of users) {
    await sequelize.query(
      'INSERT INTO Users (nom, mail, login, password, telephone, prenom, userType) VALUES (?, ?, ?, ?, ?, ?, ?)',
      { replacements: [user.nom, user.mail, user.login, user.password, user.telephone, user.prenom, user.userType] }
    );
  }

  for (const dossier of dossiers) {
    await sequelize.query(
      'INSERT INTO Dossier (Id_Dossier, id_User) VALUES (?, ?)',
      { replacements: [dossier.Id_Dossier, dossier.id_User ] }
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
