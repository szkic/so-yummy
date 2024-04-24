import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
  },
  area: {
    type: String,
    default: null,
  },
  instructions: {
    type: String,
    required: [true, "Please provide instructions"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  thumb: {
    type: String,
    default: null,
  },
  preview: {
    type: String,
    default: null,
  },
  time: {
    type: String,
    required: [true, "Please provide a time"],
  },
  favorites: {
    type: [String],
    default: [],
  },
  youtube: {
    type: String,
    default: null,
  },
  tags: {
    type: [String],
    default: [],
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  ingredients: [
    {
      id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      measure: {
        type: String,
        required: true,
      },
    },
  ],
  // ingredients: {
  //   type: Array,
  //   required: true,
  //   ref: "Ingredient",
  // },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
