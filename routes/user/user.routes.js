//const { Router } = require('express');
import { Router } from 'express';
//const userCtrl = require('../../controllers/user/user.controller');
import userCtrl from '../../controllers/user/user.controller.js';
//const verifyAuth = require('../../middlewares/isAuth');
import verifyAuth from '../../middlewares/isAuth.js';

const router = Router();

router.get('/', verifyAuth.ensureAuth, userCtrl.getUsers);
router.put('/updatePassword/:id', verifyAuth.ensureAuth, userCtrl.updatepassword);


//module.exports = router;
export default router;
