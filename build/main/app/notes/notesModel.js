"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

/**
 * The Models files contains all of your schema. 
 * Each database table has a corresponding "Model" which is used to interact with that table. 
 * Models allow you to query for data in your tables, as well as insert new records into the table.
 */
var Schema = _mongoose["default"].Schema;
var notesSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required. - Insert a title'],
    minlength: [3, 'Minimun title length 3 characters']
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});
notesSchema.plugin(_mongoosePaginateV["default"]);

var notes = _mongoose["default"].model('note', notesSchema, 'notes');

var _default = notes;
exports["default"] = _default;
//# sourceMappingURL=notesModel.js.map