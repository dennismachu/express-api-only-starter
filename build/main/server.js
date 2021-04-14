"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));

var _helmet = _interopRequireDefault(require("helmet"));

var _xssClean = _interopRequireDefault(require("xss-clean"));

var _hpp = _interopRequireDefault(require("hpp"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _notesRoute = _interopRequireDefault(require("./app/notes/notesRoute"));

var app = (0, _express["default"])();
exports.app = app;
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_express["default"].raw());
app.use(_express["default"].text());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use((0, _expressMongoSanitize["default"])()); //Use for security to prevent NoSql injections

app.use((0, _helmet["default"])()); //Adds extra headers to protect the routes

app.use((0, _xssClean["default"])()); //To prevent a harmful script being sent with the POST request

app.use((0, _hpp["default"])()); //To prevent HTTP Parameter Pollution.

/**
 * Initiate the Routes
 * All Routes to beigin with /api/v1/{the routes}
 */

var router = _express["default"].Router();

app.use('/api/v1', router);
/**
 * The Routes
 */
// Default Route

router.get('/', function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Welcome to Node.js Rest API Boiler Plate",
    author: 'Dennis Machu',
    github: 'https://github.com/dennismachu',
    linkedin: 'https://linkedin.com/in/dennismachu'
  });
}); // Routes
// import {route name} from '{route path}'
// {route name}(router)

(0, _notesRoute["default"])(router);
//# sourceMappingURL=server.js.map