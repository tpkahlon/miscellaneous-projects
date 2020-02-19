"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

var _cooks = _interopRequireDefault(require("./routes/cooks"));

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

app.use("/cooks", _cooks.default); // Adds the react production build to serve react requests

app.use(_express.default.static(_path.default.join(__dirname, "../client"))); // React root path

app.get("*", function (req, res) {
  res.sendFile(_path.default.join(__dirname + "../client/index.html"));
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options("*", (0, _cors.default)()); // Listen

app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});