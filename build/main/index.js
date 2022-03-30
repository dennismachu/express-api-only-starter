"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

var _database = require("./config/database");

var _server = require("./server");

var _keys = require("./config/keys");

var port = null;
if (process.env.NODE_ENV === 'production') port = _keys.keys.PORT_PRODUCTION || 8080;else port = _keys.keys.PORT_DEVELOPMENT || 3030;
/**
 * Connect to the Database
 */

module.exports = _server.app.listen(port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // await database()
          console.log("Service listening at http://localhost:".concat(port));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=index.js.map