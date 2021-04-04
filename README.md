# express-api-only-starter

An Express Server Node.js API only boilerplate with Mongo DB

Features

How to use it

Generate passwords

Input variables

How to deploy

More details

Release Notes

Random notes

## Install the dependencies

npm i express mongoose body-parser cors dotenv bcryptjs pm2 jsonwebtoken axios helmet morgan chalk @hapi/joi multer passport faker nodemailer joi moment mongoose-paginate-v2 eventemitter3 agenda

npm i -D @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/polyfill nodemon chai chai-http mocha newman faker rimraf

## Configuration for Babel

// .babelrc
{
"presets": ["@babel/preset-env"],
"plugins": [
["@babel/transform-runtime"]
]
