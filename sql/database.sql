create schema if not exists vaccine_covid_project default character set utf8;

create table if not exists vaccine_covid_project.laboratory
(
    id       int          not null,
    name     varchar(45)  not null,
    password varchar(255) not null,
    constraint `PRIMARY`
        primary key (id)
);

create table if not exists vaccine_covid_project.vaccine
(
    id             int auto_increment
        constraint `PRIMARY`
        primary key,
    name           varchar(45) null,
    sideEffects    text        null,
    laboratoryId   int         null,
    releaseDate    datetime    null,
    typeOfVaccine  varchar(45) null,
    injection      int         null,
    stepValidation varchar(45) null,
    constraint vaccine_laboratory_id_fk
        foreign key (laboratoryId) references laboratory (id)
);

