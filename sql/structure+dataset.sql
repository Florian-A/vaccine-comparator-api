create table if not exists laboratory
(
    id       int(9) auto_increment      not null,
    name     varchar(45)                not null,
    password varchar(255)               not null,
    constraint `PRIMARY` primary key (id)
);

create table if not exists vaccine
(
    id             int(9) auto_increment    not null,
    laboratoryId   int(9)                   null,
    name           varchar(45)              not null,
    typeOfVaccine  varchar(45)              null,
    sideEffects    text(1000)               null,
    releaseDate    datetime                 null,
    injection      int(9)                   null,
    stepValidation varchar(45)              null,
    constraint `PRIMARY` primary key (id),
    constraint vaccine_laboratory_id_fk
        foreign key (laboratoryId) references laboratory (id)
);

INSERT INTO laboratory (name, password) VALUES ('BioNTech / Pfizer', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');
INSERT INTO laboratory (name, password) VALUES ('NIAID / Moderna', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');
INSERT INTO laboratory (name, password) VALUES ('Oxford / Astra Zeneca', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (1, 'BNT162b2', 'ARNm', null, null,  null, 'III');
INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (2, 'mRNA-1273', 'ARNm', null, null, null, 'III');
INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (3, 'AZD1222', 'Vaccin à vecteur', null, null, null, 'III');