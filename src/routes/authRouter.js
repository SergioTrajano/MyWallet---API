import express from 'express'

import { validateSignIn } from '../middlewares/validateSignInMiddleware.js';
import { validateSignUp } from '../middlewares/validateSignUpMiddleware.js';
import { signIn } from '../controllers/authController.js'; 
import { singUp } from '../controllers/authController.js';

const router = express.Router();

router.get('/users', validateSignIn, signIn);
router.post('/users', validateSignUp, singUp);

export default router;