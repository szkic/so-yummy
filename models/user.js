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
});

const User = models.User || model("User", UserSchema);

export default User;
