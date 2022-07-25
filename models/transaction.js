import mongoose from "mongoose";

const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export const Transaction = mongoose.model('Transaction', transactionSchema)