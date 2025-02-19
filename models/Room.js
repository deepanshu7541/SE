const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  floor: { type: String, required: true },
  department: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" }
});

module.exports = mongoose.model("Room", roomSchema);