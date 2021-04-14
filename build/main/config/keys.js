"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = void 0;

require('dotenv').config();

var keys = {
  "DB_URL_PRODUCTION": process.env.DB_PRO_URL,
  "DB_URL_DEVELOPMENT": process.env.DB_DEV_URL,
  "PORT_PRODUCTION": "8080",
  "PORT_DEVELOPMENT": "3000"
};
exports.keys = keys;
//# sourceMappingURL=keys.js.map