import mongoose from "mongoose";

const rev = new mongoose.Schema({
  reviews: {
    type: String,
  },
  author: {
    type: String,
  },
});
const gam = new mongoose.Schema({
  title: {
    type: String,
  },
  dis: {
    type: String,
  },
  thum: {
    type: String,
  },
  review: [rev],
});

const mySchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    games: [gam],
  },
  { timestamps: true }
);

const gamerhub =
  mongoose.models.gamerhub || mongoose.model("gamerhub", mySchema);

export default gamerhub;
