#!/usr/bin/env bash

mkdir ./dist
cp ./package.json dist/package.json
cp ./package-lock.json dist/package-lock.json
cp prod.env dist/.env