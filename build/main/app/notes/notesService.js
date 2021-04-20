"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notesModel = _interopRequireDefault(require("./notesModel.js"));

var _index = _interopRequireDefault(require("../../logger/index"));

/**
 * Contains module(notes) services.
 * A service object implements the user’s interactions with the application.
 * It contains business logic that describe the connections with your domain objects.
 */
// Create
var createNotes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(title, description) {
    var note;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Create an user object
            note = new _notesModel["default"]({
              title: title,
              description: description
            });

            _index["default"].info();

            _context.next = 4;
            return note.save();

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNotes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Read


var viewNote = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var noteData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _notesModel["default"].findById(id.toString());

          case 2:
            noteData = _context2.sent;
            return _context2.abrupt("return", noteData);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function viewNote(_x3) {
    return _ref2.apply(this, arguments);
  };
}(); // Read


var viewAllNotes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(limit) {
    var options, notesData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              page: 1,
              limit: limit,
              sort: '-createdAt'
            };
            _context3.next = 3;
            return _notesModel["default"].paginate({}, options, function (err, result) {
              if (err) {
                throw new Error(err);
              }

              return result;
            });

          case 3:
            notesData = _context3.sent;
            return _context3.abrupt("return", notesData);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function viewAllNotes(_x4) {
    return _ref3.apply(this, arguments);
  };
}(); // Update


var updateNote = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, notesData) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(notesData);
            _context4.next = 3;
            return _notesModel["default"].findByIdAndUpdate(id, {
              $set: notesData
            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateNote(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}(); // Delete


var removeNotes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _notesModel["default"].findByIdAndRemove(id);

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function removeNotes(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  createNotes: createNotes,
  viewNote: viewNote,
  viewAllNotes: viewAllNotes,
  updateNote: updateNote,
  removeNotes: removeNotes
};
//# sourceMappingURL=notesService.js.map