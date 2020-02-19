"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var cookSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  dish: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

var Cook = _mongoose.default.model("Cook", cookSchema);

module.exports = Cook;