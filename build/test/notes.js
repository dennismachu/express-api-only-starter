"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _faker = _interopRequireDefault(require("faker"));

var _index = _interopRequireDefault(require("../main/index"));

var _supertest = _interopRequireDefault(require("supertest"));

var _database = require("../main/config/database");

var _notesService = require("../main/app/notes/notesService.js");

// Assertion Style
var should = _chai["default"].should();

var expect = _chai["default"].expect; // const expect = require('chai').expect

_chai["default"].use(_chaiHttp["default"]);

describe("Notes API", function () {
  // const stubValue = {
  //     title: faker.lorem.word(),
  //     description: faker.sentence()
  //   };
  // This variable will be used to hold the notes from the Find All Call
  var notes; // This function will run before every test
  // beforeEach((done) => {
  //
  // });
  // before(async () => {
  //    const db = await database()
  //  });
  //  after(async () => {
  //     await db.dropDatabase();
  //     await db.close();
  //  });

  /**
   *  Test GET Route
   */

  describe("GET /api/v1/notes", function () {
    it("It should GET all the notes", function (done) {
      _chai["default"].request(_index["default"]).get('/api/v1/notes').end(function (err, res) {
        var body = res.body;
        notes = res.body.data.docs;
        res.should.have.status(200);
        expect(body.success).to.equal(true);
        done();
      });
    });
  });
  /**
   *  Test GET (by id) Route
   */

  describe("GET /api/v1/notes/:id", function () {
    it("It should GET note by :id", function (done) {
      _chai["default"].request(_index["default"]).get("/api/v1/notes/".concat(notes[0]._id)).end(function (err, res) {
        var body = res.body;
        res.should.have.status(200);
        expect(body.success).to.equal(true);
        done();
      });
    });
  });
  /**
   *  Test POST Route
   */

  /**
   * Testing a service
   */

  describe("View Notes Services", function () {
    it("Testing the Service", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _notes;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _notesService.viewAllNotes)(10);

            case 3:
              _notes = _context.sent;
              console.log(_notes);
              expect(_notes.docs).to.be.an('array');
              expect(_notes).to.have.property('docs');
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              // Expect the errors here
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    })));
  });
});
//# sourceMappingURL=notes.js.map