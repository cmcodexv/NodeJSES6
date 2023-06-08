
//const { Router } = require('express');
import { Router } from 'express';
//const fs = require('fs');
import fs from 'fs';

//const PATH_ROUTES = __dirname;
import path from 'path';
import { fileURLToPath } from 'url';
import routes from '../routes/index.js';

const router = Router();
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const PATH_ROUTES = path.dirname(__filename);

const removeExtention = (filename) => {
    // TODO: auth.routes.js => return auth
    return filename.split('.').shift();
};


//La ruta debe llevar el nombre del controlador
fs.readdirSync(PATH_ROUTES).filter(async (file) => {
    const name = removeExtention(file);
    if (name !== 'index') {
        //router.use(`/${name}`, require(`./${name}/${file}.routes`))
        let { default: dinamicRoute } = await import(`./${name}/${file}.routes.js`);
        router.use(`/${name}`, dinamicRoute)
    }
});


//module.exports = router;
export default router;