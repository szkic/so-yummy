const { Schema, models, model } = require("mongoose");

const IngredientSchema = new Schema({
  ttl: { type: String, required: true },
  desc: { type: String, required: true },
  t: String,
  thb: { type: String, required: true },
});

const Ingredient = models.Ingredient || model("Ingredient", IngredientSchema);

export default Ingredient;
