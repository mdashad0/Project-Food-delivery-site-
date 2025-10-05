import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, userOrder, verifyOrder, listOrders, updateStatus } from "../controller/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;