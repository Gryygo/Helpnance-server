import { Transaction } from "../models/transaction.js";

export const getTransactions = async (req, res, next) => {
  const transactions = await Transaction.find();
  res.status(200).json({
    transactions: transactions,
  });
};

export const addTransaction = async (req, res, next) => {
  const title = req.body.title;
  const value = req.body.value;
  const type = req.body.type;
  const category = req.body.category;

  const transaction = new Transaction({
    title: title,
    value: value,
    type: type,
    category: category,
  });
  try {
    const result = await transaction.save();
    res.status(201).json({
      message: "Transaction added successfully",
      transaction: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  const transId = req.params.id;
  try {
    const transaction = await Transaction.findById(transId);
    if (!transaction) {
      const error = new Error("Could not find post.");
      error.statusCode = 500;
      throw error;
    }
    await Transaction.findByIdAndDelete(transId);
    res.status(200).json({ message: "Post successfully deleted" });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const editTransaction = async (req, res, next) => {
  const transId = req.params.id;
  const newTitle = req.body.title;
  const newValue = req.body.value;
  const newType = req.body.type;
  const newCategory = req.body.category;

  try {
    const transaction = await Transaction.findById(transId);
    transaction.title = newTitle;
    transaction.value = newValue;
    transaction.type = newType;
    transaction.category = newCategory;

    const updatedPost = await transaction.save();
    res.status(200).json({
      message: "Transaction updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
  }
};
