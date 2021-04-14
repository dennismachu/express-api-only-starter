"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("./config/database");

var _server = require("./server");

var _keys = require("./config/keys");

require('dotenv').config(); // import configFile from './config/configFile'


if (process.env.NODE_ENV === 'production') {
  var _port = _keys.keys.PORT_PRODUCTION || 8080;
}

var port = _keys.keys.PORT_DEVELOPMENT || 3030;
/**
 * Connect to the Database
 */
// database()

module.exports = _server.app.listen(port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.database)();

        case 2:
          console.log("Service listening at http://localhost:".concat(port));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=index.js.map