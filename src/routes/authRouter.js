import express from 'express'

import { validateSignIn } from '../middlewares/validateSignInMiddleware.js';
import { validateSignUn } from '../middlewares/validadeSignUpMiddleware.js';
import { signIn } from '../controllers/authController.js'; 
import { singUp } from '../controllers/authController.js';

const router = express.Router();

router.get('/users', validateSignIn, signIn);
router.post('/users', validateSignUn, singUp);

export default router;