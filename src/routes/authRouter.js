import express from 'express'

import { validateSignIn } from '../middlewares/validateSignInMiddleware.js';
import { signIn } from '../controllers/authController.js'; 

const router = express.Router();

router.get('/signIn', validateSignIn, signIn);

export default router;