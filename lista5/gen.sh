#!/bin/bash

openssl genrsa -out privkeyA.pem
openssl genrsa -out privkeyB.pem
openssl req -new -key privkeyA.pem -out certA.csr < data.txt
openssl req -new -x509 -key privkeyB.pem -out CAcert.crt -days 15 < data.txt
openssl x509 -req -days 45 -in certA.csr -CA CAcert.crt -CAkey privkeyB.pem -set_serial 01 -out certA.crt
