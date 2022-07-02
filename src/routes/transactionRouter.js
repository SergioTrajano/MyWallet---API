import { Router } from "express";

import { validateTransactionHeader } from "../middlewares/validateTransactionHeaderMIddleware.js";
import { getTransactionHistory } from "../controllers/transactionController.js";
const router = Router();

router.get('/transaction', validateTransactionHeader, getTransactionHistory);


export default router;
