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
    default: ["640cd5ac2d9fecf12e8897fc", "640cd5ac2d9fecf12e8897f0"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
