#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: CLIENTS
#------------------------------------------------------------

CREATE TABLE CLIENTS(
        cl_id       int (11) Auto_increment  NOT NULL ,
        cl_nom      Varchar (50) ,
        cl_prenom   Varchar (50) ,
        cl_portable Varchar (12) ,
        cl_mail     Varchar (150) ,
        cl_mdp      Varchar (100) ,
        PRIMARY KEY (cl_id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: TAXIS
#------------------------------------------------------------

CREATE TABLE TAXIS(
        ta_id       int (11) Auto_increment  NOT NULL ,
        ta_nom      Varchar (50) ,
        ta_prenom   Varchar (50) ,
        ta_portable Varchar (12) ,
        ta_mail     Varchar (150) ,
        ta_mdp      Varchar (100) ,
        tf_id       Int ,
        ve_immat    Varchar (10) ,
        se_id       Int ,
        PRIMARY KEY (ta_id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: COURSES
#------------------------------------------------------------

CREATE TABLE COURSES(
        co_id               int (11) Auto_increment  NOT NULL ,
        co_date             Date ,
        co_heure            Datetime ,
        co_place_necessaire Int ,
        co_prise_charge     Varchar (150) ,
        co_detination       Varchar (150) ,
        cl_id               Int ,
        se_id               Int ,
        tf_id               Int ,
        ta_id               Int ,
        PRIMARY KEY (co_id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: SECTEUR
#------------------------------------------------------------

CREATE TABLE SECTEUR(
        se_id      int (11) Auto_increment  NOT NULL ,
        se_libelle Varchar (50) ,
        PRIMARY KEY (se_id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: TARIFS
#------------------------------------------------------------

CREATE TABLE TARIFS(
        tf_id         int (11) Auto_increment  NOT NULL ,
        tf_libelle    Varchar (50) ,
        tf_prixttc_km Decimal (25) ,
        PRIMARY KEY (tf_id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: VEHICULES
#------------------------------------------------------------

CREATE TABLE VEHICULES(
        ve_immat     Varchar (10) NOT NULL ,
        ve_marque    Varchar (50) ,
        ve_model     Varchar (50) ,
        ve_nbr_place Int ,
        ve_energie   Varchar (25) ,
        ta_id        Int ,
        PRIMARY KEY (ve_immat )
)ENGINE=InnoDB;

ALTER TABLE TAXIS ADD CONSTRAINT FK_TAXIS_tf_id FOREIGN KEY (tf_id) REFERENCES TARIFS(tf_id);
ALTER TABLE TAXIS ADD CONSTRAINT FK_TAXIS_ve_immat FOREIGN KEY (ve_immat) REFERENCES VEHICULES(ve_immat);
ALTER TABLE TAXIS ADD CONSTRAINT FK_TAXIS_se_id FOREIGN KEY (se_id) REFERENCES SECTEUR(se_id);
ALTER TABLE COURSES ADD CONSTRAINT FK_COURSES_cl_id FOREIGN KEY (cl_id) REFERENCES CLIENTS(cl_id);
ALTER TABLE COURSES ADD CONSTRAINT FK_COURSES_se_id FOREIGN KEY (se_id) REFERENCES SECTEUR(se_id);
ALTER TABLE COURSES ADD CONSTRAINT FK_COURSES_tf_id FOREIGN KEY (tf_id) REFERENCES TARIFS(tf_id);
ALTER TABLE COURSES ADD CONSTRAINT FK_COURSES_ta_id FOREIGN KEY (ta_id) REFERENCES TAXIS(ta_id);
ALTER TABLE VEHICULES ADD CONSTRAINT FK_VEHICULES_ta_id FOREIGN KEY (ta_id) REFERENCES TAXIS(ta_id);
