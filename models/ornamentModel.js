const mongoose = require("mongoose");

const ornamentReceiptSchema = new mongoose.Schema(
  {
    pawatiNumber: {
      type: Number,
      autoIncrement: true,
      sequence_value: 0,
      unique: true,
    },
    receiptDate: {
      type: String,
    },
    Name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: Number,
    },
    state: {
      type: String,
    },
    ornamentName: {
      type: String,
    },
    ornamentType: {
      type: String,
    },
    ornamentValue: {
      type: Number,
    },
    ornamentWeight: {
      type: String,
    },
    gotra: {
      type: String,
    },
    address: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrnamentReceiptNira", ornamentReceiptSchema);
