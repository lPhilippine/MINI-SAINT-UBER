#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: COMPANY
#------------------------------------------------------------

CREATE TABLE COMPANY(
        id_co          int (11) Auto_increment  NOT NULL ,
        name_co        Varchar (25) NOT NULL ,
        siret          Numeric NOT NULL ,
        naf            Varchar (25) NOT NULL ,
        kbis           Blob NOT NULL ,
        tel_co         Numeric NOT NULL ,
        adress_co      Varchar (150) NOT NULL ,
        postal_code_co Numeric NOT NULL ,
        city_co        Varchar (25) NOT NULL ,
        photo_co       Blob ,
        boss_co        Varchar (25) ,
        creation_co    Date NOT NULL ,
        password_co    Varchar (25) NOT NULL ,
        opening_day    Varchar (25) NOT NULL ,
        opening_time   Varchar (25) NOT NULL ,
        closing_time   Varchar (25) ,
        night_service  Bool NOT NULL ,
        id_ad          Int NOT NULL ,
        email_co       Varchar (25) NOT NULL,
        PRIMARY KEY (id_co )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: USER
#------------------------------------------------------------

CREATE TABLE USER(
        id_user          int (11) Auto_increment  NOT NULL ,
        name_user        Varchar (25) NOT NULL ,
        first_name_user  Varchar (25) NOT NULL ,
        tel_user         Numeric NOT NULL ,
        adress_user      Char (100) NOT NULL ,
        postal_code_user Numeric NOT NULL ,
        city_user        Varchar (25) NOT NULL ,
        creation_user    Date NOT NULL ,
        password_user    Varchar (25) NOT NULL ,
        photo_user       Blob ,
        id_co            Int NOT NULL ,
        email_user       Varchar (25) NOT NULL,
        PRIMARY KEY (id_user )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: AD
#------------------------------------------------------------

CREATE TABLE AD(
        id_ad          int (11) Auto_increment  NOT NULL ,
        longitude      Float ,
        token          Numeric NOT NULL ,
        description_ad Varchar (5000) NOT NULL ,
        accept_ad      Bool ,
        name_ad        Varchar (25) NOT NULL ,
        date_ad        Date NOT NULL ,
        ad_type        Varchar (25) NOT NULL ,
        photo_ad       Blob ,
        latitude       Float ,
        distance       Float NOT NULL ,
        repair_date    Date ,
        id_user        Int NOT NULL ,
        id_co          Int NOT NULL ,
        id_car         Int NOT NULL ,
        PRIMARY KEY (id_ad )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: CAR
#------------------------------------------------------------

CREATE TABLE CAR(
        id_car      int (11) Auto_increment  NOT NULL ,
        car_brand   Varchar (25) NOT NULL ,
        car_version Varchar (25) NOT NULL ,
        car_model   Varchar (25) NOT NULL ,
        in_service  Date NOT NULL ,
        photo_car   Blob ,
        id_user     Int NOT NULL ,
        PRIMARY KEY (id_car )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: RATING
#------------------------------------------------------------

CREATE TABLE RATING(
        id_rating          int (11) Auto_increment  NOT NULL ,
        description_rating Varchar (5000) NOT NULL ,
        rating             Numeric ,
        date_rating        Date NOT NULL ,
        id_co              Int NOT NULL ,
        id_user            Int NOT NULL ,
        PRIMARY KEY (id_rating )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: QUOTE
#------------------------------------------------------------

CREATE TABLE QUOTE(
        price_estimate    Float NOT NULL ,
        date_quote        Date NOT NULL ,
        description_quote Varchar (5000) NOT NULL ,
        id_co             Int NOT NULL ,
        id_ad             Int NOT NULL ,
        PRIMARY KEY (id_co ,id_ad )
)ENGINE=InnoDB;

ALTER TABLE COMPANY ADD CONSTRAINT FK_COMPANY_id_ad FOREIGN KEY (id_ad) REFERENCES AD(id_ad);
ALTER TABLE USER ADD CONSTRAINT FK_USER_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
ALTER TABLE AD ADD CONSTRAINT FK_AD_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
ALTER TABLE AD ADD CONSTRAINT FK_AD_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
ALTER TABLE AD ADD CONSTRAINT FK_AD_id_car FOREIGN KEY (id_car) REFERENCES CAR(id_car);
ALTER TABLE CAR ADD CONSTRAINT FK_CAR_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
ALTER TABLE RATING ADD CONSTRAINT FK_RATING_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
ALTER TABLE RATING ADD CONSTRAINT FK_RATING_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
ALTER TABLE QUOTE ADD CONSTRAINT FK_QUOTE_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
ALTER TABLE QUOTE ADD CONSTRAINT FK_QUOTE_id_ad FOREIGN KEY (id_ad) REFERENCES AD(id_ad);
