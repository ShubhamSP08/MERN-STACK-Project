import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../Controllers/bookingController.js";

const router = express.Router();

// Corrected route with leading '/'
router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);

export default router;
