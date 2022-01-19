const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create poll schema & model
const PollSchema = new Schema({
  pollId: {
    type: String,
    required: [true, "Poll id is required!"],
  },
  description: {
    type: String,
  },
});

const Poll = mongoose.model("poll", PollSchema);

module.exports = Poll;
