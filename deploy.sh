#!/bin/bash

#install dependencies
sudo apt-get install nodejs
sudo apt-get install npm

#install node modules
npm install

#build the project
npm run build

#mv the build folder to the good folder (that is outside the docker container)
mv build ../
cd ../
pwd

#THIS IS A TEST BTW
