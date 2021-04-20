"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readOne = exports.remove = exports.update = exports.readAll = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notesService = require("./notesService.js");

var _apiResponse = _interopRequireDefault(require("../../utility/apiResponse"));

var _joi = _interopRequireDefault(require("joi"));

/**
 * Contains app controllers.
 * The controller can thus be thought of as a middleman between models & services
 */
// Create
var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, title, description, response, message;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            _context.prev = 1;
            _context.next = 4;
            return (0, _notesService.createNotes)(title, description);

          case 4:
            response = _context.sent;
            message = 'Note created succeddfully';
            return _context.abrupt("return", _apiResponse["default"].successResponseWithData(res, message, response));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _apiResponse["default"].errorResponse(res, _context.t0.errors));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Read


exports.create = create;

var readAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var limit, notes;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            limit = req.query.limit || 10;
            _context2.next = 4;
            return (0, _notesService.viewAllNotes)(limit);

          case 4:
            notes = _context2.sent;
            return _context2.abrupt("return", _apiResponse["default"].successResponseWithData(res, notes));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _apiResponse["default"].errorResponse(res, _context2.t0.errors));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function readAll(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // Read By ID


exports.readAll = readAll;

var readOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var noteID, note, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            noteID = req.params.id;
            _context3.next = 4;
            return (0, _notesService.viewNote)(noteID);

          case 4:
            note = _context3.sent;

            if (note) {
              _context3.next = 8;
              break;
            }

            message = 'No record found';
            return _context3.abrupt("return", _apiResponse["default"].notFoundResponse(res, message));

          case 8:
            return _context3.abrupt("return", _apiResponse["default"].successResponseWithData(res, note));

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _apiResponse["default"].errorResponse(res, _context3.t0.errors));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function readOne(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // Update


exports.readOne = readOne;

var update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var noteID, note, message, noteData, updateNoteData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            noteID = req.params.id;
            _context4.next = 4;
            return (0, _notesService.viewNote)(noteID);

          case 4:
            note = _context4.sent;

            if (note) {
              _context4.next = 8;
              break;
            }

            message = 'No record found';
            return _context4.abrupt("return", _apiResponse["default"].notFoundResponse(res, message));

          case 8:
            noteData = {
              title: _joi["default"].attempt(req.body.title, _joi["default"].string().min(3).max(30).required(), 'Title Error:'),
              description: _joi["default"].attempt(req.body.description, _joi["default"].string(), 'Description Error:')
            };
            _context4.next = 11;
            return (0, _notesService.updateNote)(noteID, noteData);

          case 11:
            updateNoteData = _context4.sent;
            return _context4.abrupt("return", _apiResponse["default"].successResponseWithData(res, updateNoteData));

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _apiResponse["default"].errorResponse(res, _context4.t0.message));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));

  return function update(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // Delete


exports.update = update;

var remove = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var note, message;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _notesService.viewNote)(req.params.id);

          case 3:
            note = _context5.sent;

            if (note) {
              _context5.next = 7;
              break;
            }

            message = 'Note not found';
            return _context5.abrupt("return", _apiResponse["default"].notFoundResponse(res, message));

          case 7:
            _context5.next = 9;
            return (0, _notesService.removeNotes)(req.params.id).then(function (result) {
              var message = 'Note Deleted';
              return _apiResponse["default"].successResponse(res, message);
            })["catch"](function (err) {
              return _apiResponse["default"].errorResponse(res, err.errors);
            });

          case 9:
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", _apiResponse["default"].errorResponse(res, _context5.t0.errors));

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function remove(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.remove = remove;
//# sourceMappingURL=notesController.js.map