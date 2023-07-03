CREATE TABLE Users(
   id_User INT AUTO_INCREMENT,
   nom VARCHAR(50),
   mail VARCHAR(50),
   login VARCHAR(50) NOT NULL,
   password VARCHAR(50) NOT NULL,
   telephone VARCHAR(20),
   prenom VARCHAR(50),
   userType VARCHAR(20) NOT NULL,
   PRIMARY KEY(id_User)
);

CREATE TABLE Messages(
   id_Message INT AUTO_INCREMENT,
   message VARCHAR(50),
   dateMessage DATETIME,
   id_User INT NOT NULL,
   PRIMARY KEY(id_Message),
   FOREIGN KEY(id_User) REFERENCES Users(id_User)
);

CREATE TABLE Dossier(
   Id_Dossier INT AUTO_INCREMENT,
   id_User INT NOT NULL,
   PRIMARY KEY(Id_Dossier),
   FOREIGN KEY(id_User) REFERENCES Users(id_User)
);

CREATE TABLE Documents(
   id_Documents INT AUTO_INCREMENT,
   file_name VARCHAR(255),
   file_size VARCHAR(50),
   file_type VARCHAR(50),
   file_data BLOB,
   Id_Dossier INT NOT NULL,
   PRIMARY KEY(id_Documents),
   FOREIGN KEY(Id_Dossier) REFERENCES Dossier(Id_Dossier)
);

CREATE TABLE Addresses(
   id INT AUTO_INCREMENT,
   address1 VARCHAR(255),
   address2 VARCHAR(255),
   city VARCHAR(100),
   department VARCHAR(100),
   postalCode VARCHAR(10),
   PRIMARY KEY(id)
);

ALTER TABLE Addresses
ADD COLUMN user_id INT,
ADD FOREIGN KEY (user_id) REFERENCES Users(id_User);