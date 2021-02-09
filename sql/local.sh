#!/usr/bin/env bash

cat database.local.sql | mysql -h127.0.0.1 -uroot -p1234
cat structure+dataset.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_covid_local