#!/usr/bin/env bash

cat database.local.sql | mysql -h127.0.0.1 -uroot -p1234
cat structure.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_comparator_local
cat dataset.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_comparator_local