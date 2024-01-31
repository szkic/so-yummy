import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  favorites: {
    type: [String],
    default: [],
  },
  youtube: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
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
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
