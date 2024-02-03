import express from "express";
import KPI from "../models/KPI.js"; // This is your model import

const router = express.Router();

router.get("/kpis", async (req, res) => {
    try {
        const kpis = await KPI.find(); // Use 'KPI' to refer to your model
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
