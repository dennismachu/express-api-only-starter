"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;

require("dotenv/config");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _chalk = _interopRequireDefault(require("chalk"));

var _keys = require("./keys");

var _index = _interopRequireDefault(require("../logger/index"));

var connected = _chalk["default"].bold.cyan;
var error = _chalk["default"].bold.yellow;
var disconnected = _chalk["default"].bold.red;
var termination = _chalk["default"].bold.magenta;
var DB_URL = process.env.NODE_ENV === 'production' ? _keys.keys.DB_URL_PRODUCTION : _keys.keys.DB_URL_DEVELOPMENT;

var database = function database() {
  _mongoose["default"].connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  _mongoose["default"].connection.on('connected', function () {
    _index["default"].info('Mongoose default connection is open');

    console.log(connected('Mongoose default connection is open'));
  });

  _mongoose["default"].connection.on('error', function (err) {
    console.log(error('Mongoose default connection has occured ' + err + ' error'));
  });

  _mongoose["default"].connection.on('disconnected', function () {
    console.log(disconnected('Mongoose default connection is disconnected'));
  });

  process.on('SIGINT', function () {
    _mongoose["default"].connection.close(function () {
      console.log(termination('Mongoose default connection is disconnected due to application termination'));
      process.exit(0);
    });
  });
};

exports.database = database;
//# sourceMappingURL=database.js.map