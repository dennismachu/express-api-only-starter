"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

// Logger configuration
var logConfiguration = {
  transports: [new _winston["default"].transports.Console({
    level: 'warn',
    format: _winston["default"].format.combine(_winston["default"].format.label({
      label: "\u26D4 "
    }), _winston["default"].format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss'
    }), _winston["default"].format.printf(function (warn) {
      return "".concat(warn.level, ": ").concat(warn.label, ": ").concat([warn.timestamp], ": ").concat(warn.message);
    }))
  }), new _winston["default"].transports.File({
    level: 'error',
    // Create the log directory if it does not exist
    filename: 'src/main/logger/index.log'
  }), new _winston["default"].transports.File({
    level: 'info',
    //Create a format
    format: _winston["default"].format.combine(_winston["default"].format.label({
      label: "\uD83D\uDCA1"
    }), _winston["default"].format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss'
    }), _winston["default"].format.printf(function (info) {
      return "".concat(info.level, ": ").concat(info.label, ": ").concat([info.timestamp], ": ").concat(info.message);
    })),
    // Create the log directory if it does not exist
    filename: 'src/main/logger/index.log'
  }), new _winston["default"].transports.File({
    level: 'debug',
    // Create the log directory if it does not exist
    filename: 'src/main/logger/index.log'
  })]
};

var logger = _winston["default"].createLogger(logConfiguration);

var _default = logger;
exports["default"] = _default;
//# sourceMappingURL=index.js.map