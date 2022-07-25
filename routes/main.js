import express from "express";
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from "../controllers/main.js";

export const router = express.Router();

router.get("/transactions", getTransactions);

router.post("/transaction", addTransaction);

router.delete("/transaction/:id", deleteTransaction);

router.patch("/transaction/:id", editTransaction);
