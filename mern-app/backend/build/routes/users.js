"use strict";

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route("/").get(function (req, res) {
  _user.default.find().then(function (users) {
    return res.json(users);
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/add").post(function (req, res) {
  var username = req.body.username;
  var newUser = new _user.default({
    username: username
  });
  newUser.save().then(function () {
    return res.json("User added!");
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
module.exports = router;