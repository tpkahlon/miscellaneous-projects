import express from "express";
import Cook from "../models/cook.model";

const router = express.Router();

router.route("/").get((req, res) => {
  Cook.find()
    .then(cooks => res.json(cooks))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const dish = req.body.dish;
  const price = Number(req.body.price);

  const newCook = new Cook({
    name,
    dish,
    price
  });

  newCook
    .save()
    .then(() => res.json("Cook added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Cook.findById(req.params.id)
    .then(cook => res.json(cook))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Cook.findByIdAndDelete(req.params.id)
    .then(() => res.json("Cook deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Cook.findById(req.params.id)
    .then(cook => {
      cook.name = req.body.name;
      cook.dish = req.body.dish;
      cook.price = Number(req.body.price);
      cook
        .save()
        .then(() => res.json("Cook updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
