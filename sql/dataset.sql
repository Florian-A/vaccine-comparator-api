INSERT INTO laboratory (name, password) VALUES ('BioNTech / Pfizer', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');
INSERT INTO laboratory (name, password) VALUES ('NIAID / Moderna', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');
INSERT INTO laboratory (name, password) VALUES ('Oxford / Astra Zeneca', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (1, 'BNT162b2', 'ARNm', null, null,  null, 'III');
INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (2, 'mRNA-1273', 'ARNm', null, null, null, 'III');
INSERT INTO vaccine (laboratoryId, name, typeOfVaccine, sideEffects, releaseDate, injection, stepValidation) VALUES (3, 'AZD1222', 'Vaccin à vecteur', null, null, null, 'III');