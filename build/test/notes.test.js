"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _faker = _interopRequireDefault(require("faker"));

var _index = _interopRequireDefault(require("../main/index"));

var _notesService = require("../main/app/notes/notesService.js");

var _database = require("../main/config/database");

// Assertion Style
var should = _chai["default"].should();

var expect = _chai["default"].expect;

_chai["default"].use(_chaiHttp["default"]);

describe("Notes API", function () {
  /**
   * This variable will be used to hold the notes from the Find All Call
   */
  var notes = [];
  /**
   *  Test GET all Notes Route
   */

  describe("GET all notes", function () {
    it("It should GET all notes", function (done) {
      _chai["default"].request(_index["default"]).get("/api/v1/notes").end(function (err, res) {
        var body = res.body;
        notes = body.data.docs;
        res.should.have.status(200);
        expect(body.success).to.equal(true);
        done();
      });
    });
  });
  /**
   *  Test GET a Note Route
   */

  describe("GET /api/v1/notes/:id", function () {
    it("It should GET notes by their ID", function (done) {
      _chai["default"].request(_index["default"]).get("/api/v1/notes/" + notes[0]._id).end(function (err, res) {
        var body = res.body;
        res.should.have.status(200);
        expect(body.success).to.equal(true);
        done();
      });
    });
  });
});
//# sourceMappingURL=notes.test.js.map