import { Router } from "express";

import { validateTransactionHeader } from "../middlewares/validateTransactionHeaderMIddleware.js";
import { getTransactionHistory, postOnTransactionHistory } from "../controllers/transactionController.js";
import { validateTransactionBody } from '../middlewares/validadeTransactionBodyMIddleware.js';
const router = Router();

router.get('/transaction', validateTransactionHeader, getTransactionHistory);
router.post('/transaction', validateTransactionBody, validateTransactionHeader, postOnTransactionHistory);


export default router;
