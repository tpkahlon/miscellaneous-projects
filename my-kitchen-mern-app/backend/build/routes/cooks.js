"use strict";

var _express = _interopRequireDefault(require("express"));

var _cook = _interopRequireDefault(require("../models/cook.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route("/").get(function (req, res) {
  _cook.default.find().then(function (cooks) {
    return res.json(cooks);
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/add").post(function (req, res) {
  var name = req.body.name;
  var dish = req.body.dish;
  var price = Number(req.body.price);
  var newCook = new _cook.default({
    name: name,
    dish: dish,
    price: price
  });
  newCook.save().then(function () {
    return res.json("Cook added!");
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/:id").get(function (req, res) {
  _cook.default.findById(req.params.id).then(function (cook) {
    return res.json(cook);
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/:id").delete(function (req, res) {
  _cook.default.findByIdAndDelete(req.params.id).then(function () {
    return res.json("Cook deleted.");
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
router.route("/update/:id").post(function (req, res) {
  _cook.default.findById(req.params.id).then(function (cook) {
    cook.name = req.body.name;
    cook.dish = req.body.dish;
    cook.price = Number(req.body.price);
    cook.save().then(function () {
      return res.json("Cook updated!");
    }).catch(function (err) {
      return res.status(400).json("Error: " + err);
    });
  }).catch(function (err) {
    return res.status(400).json("Error: " + err);
  });
});
module.exports = router;