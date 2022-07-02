import { Router } from "express";

import { validateTransactionHeader } from "../middlewares/validateTransactionHeaderMIddleware";
import { getTransactionHistory } from "../controllers/transactionController";
const router = Router();

router.get('/transaction', validateTransactionHeader, getTransactionHistory);


export default router;
