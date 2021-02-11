#!/usr/bin/env bash

cat database.prod.sql | mysql -hdb_host -udb_user -pdb_pass
cat structure.sql | mysql -hdb_host -udb_user -pdb_pass db_name