"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

var _exercises = _interopRequireDefault(require("./routes/exercises"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Defaults
var app = (0, _express.default)();
var port = process.env.PORT || 5000;
app.use((0, _cors.default)());
app.use(_express.default.json()); // Mongoose

var uri = process.env.ATLAS_URI;
var connection = _mongoose.default.connection;

_mongoose.default.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
}); // Routes

app.use("/exercises", _exercises.default);
app.use("/users", _users.default); // Listen

app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});