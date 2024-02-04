import express from "express";
import Product from "../models/Product.js"; // This is your model import

const router = express.Router();

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find(); // Use 'KPI' to refer to your model
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
