import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cookSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    dish: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
