CREATE SCHEMA IF NOT EXISTS `courtier` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `courtier` ;


DROP TABLE IF EXISTS `courtier`.`Clients` ;
CREATE TABLE Clients(
   id_Client VARCHAR(255),
   nom VARCHAR(50),
   mail VARCHAR(50),
   login VARCHAR(50) NOT NULL,
   password VARCHAR(50) NOT NULL,
   telephone INT,
   prenom VARCHAR(50),
   userType INT NOT NULL,
   PRIMARY KEY(id_Client)
);

DROP TABLE IF EXISTS `courtier`.`Messages` ;
CREATE TABLE Messages(
   id_Message INT AUTO_INCREMENT,
   message VARCHAR(50),
   dateMessage DATETIME,
   id_Client VARCHAR(255) NOT NULL,
   PRIMARY KEY(id_Message),
   FOREIGN KEY(id_Client) REFERENCES Clients(id_Client)
);

DROP TABLE IF EXISTS `courtier`.`Dossier` ;
CREATE TABLE Dossier(
   Id_Dossier INT AUTO_INCREMENT,
   adresse VARCHAR(255),
   adresse_L2 VARCHAR(255),
   ville VARCHAR(50),
   departement VARCHAR(50),
   code_postale INT,
   telephone INT,
   id_Client VARCHAR(255) NOT NULL,
   PRIMARY KEY(Id_Dossier),
   FOREIGN KEY(id_Client) REFERENCES Clients(id_Client)
);

DROP TABLE IF EXISTS `courtier`.`Documents` ;
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


DELIMITER $$

USE `courtier`$$
DROP TRIGGER IF EXISTS `courtier`.`courtier_BEFORE_INSERT` $$
USE `courtier`$$
CREATE TRIGGER `courtier`.`courtier_BEFORE_INSERT`
BEFORE INSERT ON `Messages`.`Messages`
FOR EACH ROW
BEGIN
	SET NEW.dateMessage = NOW();
END$$