# express-api-only-starter

An Express Server Node.js API only boilerplate with Mongo DB

Features

How to use it

Generate passwords

Input variables

How to deploy

More details

Release Notes

# Random notes

###### Process management

PM2 - Advanced Process Manager.
nodemon - Monitor for changes in your app and automatically restart the server.

###### Job queues

agenda - MongoDB-backed job scheduling.
idoit - Redis-backed job queue engine with advanced job control.

###### Email

Nodemailer - The fastest way to handle email.

###### Authorization

CASL - Isomorphic authorization for UI and API.

###### Authentication

Passport - Simple, unobtrusive authentication.

###### Testing

Mocha - Feature-rich test framework making asynchronous testing simple and fun.
nyc - Code coverage tool built on istanbul that works with subprocesses.
Jest - Painless JavaScript testing.
Chai

###### Coverage

Istanbul

###### DB

Mongoose - Elegant MongoDB object modeling.
Redis - Redis client.

###### Data validation

joi - Object schema description language and validator for JavaScript objects.

###### URL

normalize-url - Normalize a URL.
speakingurl - Generate a slug from a string with transliteration.

###### Date

Moment.js - Parse, validate, manipulate, and display dates.

###### Math

mathjs - An extensive math library.
round-to - Round a number to a specific number of decimal places: 1.234 → 1.2.

###### Image

qrcode - QR code and bar code generator.

###### Real-time

µWebSockets - Highly scalable WebSocket server & client library.
Socket.io - Enables real-time bidirectional event-based communication.

###### HTTP

axios - Promise based HTTP client (works in the browser too).

###### HTTP SECURITY
express-mongo-sanitize - Use to prevent NoSql injections.
helmet - Adds extra headers to protect the routes.
xss-clean - To prevent a harmful script being sent with the POST request.
hpp - To prevent HTTP Parameter Pollution.
express-rate-limit - This is used for api rate limiting.

###### Logger
Winston

# Install the dependencies

```
npm i express mongoose body-parser cors dotenv bcryptjs pm2 jsonwebtoken axios helmet morgan chalk @hapi/joi multer passport faker nodemailer joi moment mongoose-paginate-v2 eventemitter3 agenda winston
```

```
npm i -D @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/polyfill nodemon chai chai-http mocha newman faker rimraf
```

# Configuration for Babel

// .babelrc

```
{
"presets": ["@babel/preset-env"],
"plugins": [
["@babel/transform-runtime"]
]
```
