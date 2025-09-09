#!/usr/bin/env bash
echo "Starting tests"

echo "Making GET all Contacts request"
echo "========================="
curl -X GET http://127.0.0.1:3777/ | jq '.'
echo "========================="

echo "Making POST request"
echo "========================="
curl -v -X POST -H 'Content-Type: application/json' -d '{"firstName": "Ammon", "lastName": "Mosiahson", "birthday":"April 27th 60BC", "favoriteColor": "green", "email": "armdude@nephite.net"}' http://127.0.0.1:3777/
echo "========================="
echo "Completed"
