#!/usr/bin/env bash

cat ./sql/database.test.sql | mysql -h127.0.0.1 -uroot -p1234
cat ./sql/structure+dataset.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_covid_test