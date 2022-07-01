import express from 'express'

import { validateSignIn } from '../middlewares/validateSignIn.js';
import { signIn } from '../controllers/authController.js'; 

const router = express.Router();

router.get('/signIn', validateSignIn, signIn);

export default router;