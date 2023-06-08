//const { Router } = require('express');
import { Router } from 'express';
//const authCtrl = require('../../controllers/auth/auth.controller');
import authCtrl from '../../controllers/auth/auth.controller.js';
import  verifyUser  from '../../middlewares/verifyUser.js';
//const verifyUser = require('../../middlewares/verifyUser');
//const verifyAuth = require('../../middlewares/isAuth');
import verifyAuth  from '../../middlewares/isAuth.js';

const router = Router();

//nuevo usuario
router.post('/signup', [verifyAuth.ensureAuth, verifyUser.checkDuplicateEmail], authCtrl.signUp);
//login
router.post('/signin', authCtrl.signIn);


//module.exports = router;

export default router;
