const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Shoe = require("./shoe");

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email address."],
    required: "Must pass an email",
  },

  password: {
    type: String,
    trim: true,
    required: "Must pass a password",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.post("remove", async (user) => {
  try {
    await Shoe.deleteMany({ authorId: user._id });

    const matchingEntries = await Shoe.find({
      likes: { likerId: user._id },
    });

    matchingEntries.forEach(async (entry) => {
      const indexToDelete = entry.likes.indexOf(user._id);
      entry.likes.splice(indexToDelete, 1);
      await entry.save();
    });
  } catch (error) {
    console.log(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
