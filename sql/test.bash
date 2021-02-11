#!/usr/bin/env bash

cat database.test.sql | mysql -h127.0.0.1 -uroot -p1234
cat structure.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_comparator_test
cat dataset.sql | mysql -h127.0.0.1 -uroot -p1234 vaccine_comparator_test