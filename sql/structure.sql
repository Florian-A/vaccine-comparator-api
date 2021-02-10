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