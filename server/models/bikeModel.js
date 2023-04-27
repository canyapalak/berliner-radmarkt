import mongoose from "mongoose";
const { Schema } = mongoose;

const bikeSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },

    userPicture: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    frame: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    postTime: {
      type: Date,
      required: true,
    },

    favorites: [
      {
        type: String,
      },
    ],

    photos: [
      {
        type: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const bikeModel = mongoose.model("bike", bikeSchema);

export default bikeModel;
