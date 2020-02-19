"use strict";

var _express = _interopRequireDefault(require("express"));

var _exercise = _interopRequireDefault(require("../models/exercise.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route("/").get(function (req, res) {
  _exercise.default.find().then(function (exercises) {
    return res.json(exercises);
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/add").post(function (req, res) {
  var username = req.body.username;
  var description = req.body.description;
  var duration = Number(req.body.duration);
  var date = Date.parse(req.body.date);
  var newExercise = new _exercise.default({
    username: username,
    description: description,
    duration: duration,
    date: date
  });
  newExercise.save().then(function () {
    return res.json("Exercise added!");
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/:id").get(function (req, res) {
  _exercise.default.findById(req.params.id).then(function (exercise) {
    return res.json(exercise);
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/:id").delete(function (req, res) {
  _exercise.default.findByIdAndDelete(req.params.id).then(function () {
    return res.json("Exercise deleted.");
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/update/:id").post(function (req, res) {
  _exercise.default.findById(req.params.id).then(function (exercise) {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
    exercise.save().then(function () {
      return res.json("Exercise updated!");
    }).catch(function (err) {
      return res.status(400).json("Error: " + err);
    });
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
module.exports = router;