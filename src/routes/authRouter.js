import express from 'express'

import { validateSignIn } from '../middlewares/validateSignInMiddleware.js';
import { validateSignUn } from '../middlewares/validadeSignUpMiddleware.js';
import { signIn } from '../controllers/authController.js'; 
import { singUp } from '../controllers/authController.js';

const router = express.Router();

router.get('/signIn', validateSignIn, signIn);
router.post('/signUp', validateSignUn, singUp);

export default router;