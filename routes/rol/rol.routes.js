//const { Router } = require('express');
import { Router } from 'express';
//const rolCtrl = require('../../controllers/rol/rol.controller');
import rolCtrl from '../../controllers/rol/rol.controller.js';
//const verifyRol = require('../../middlewares/verifyRol');
import verifyRol from '../../middlewares/verifyRol.js';
//const verifyAuth = require('../../middlewares/isAuth');
import verifyAuth from '../../middlewares/isAuth.js';

const router = Router();

router.get('/', verifyAuth.ensureAuth, rolCtrl.getRoles);
router.get('/listAccesos', verifyAuth.ensureAuth, rolCtrl.getAccesos);
router.post('/add', [verifyAuth.ensureAuth, verifyRol.checkDuplicateRol], rolCtrl.add);


//module.exports = router;
export default router;
