import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dgr5ysrrw/image/upload/v1706098775/avatars/default.jpg",
  },
  favorites: {
    type: [String],
    default: [],
  },
  myRecipes: {
    type: [String],
    default: ["640cd5ac2d9fecf12e889838"],
  },
  shoppingList: {
    type: [String],
    default: ["640c2dd963a319ea671e373a", "640c2dd963a319ea671e373f"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
