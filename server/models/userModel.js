import mongoose from "mongoose";
const { Schema } = mongoose;

const messagesSchema = new Schema({
  userName: {
    type: String,
  },

  userId: {
    type: String,
  },

  profilePicture: {
    type: String,
  },

  messageTime: {
    type: Date,
  },

  messageText: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  userPicture: {
    type: String,
  },

  signupTime: {
    type: Date,
  },

  messages: [messagesSchema],

  isAdmin: {
    type: Boolean,
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
