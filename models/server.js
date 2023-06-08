//const express = require('express');
import express from 'express';
//const cors = require('cors');
import cors from 'cors';
//const morgan = require('morgan');
//const pkg = require('../package.json');
//const { dbConnection } = require('../database/config');
import router from '../routes/index.js';

export class Server {

    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.port = process.env.PORT;
        // Route default
        this.app.get('/info', (req, res) => {
            res.send('Run!');
        });
        //CORS
        this.app.use(cors());
        // Index routes
        //this.app.use('/api', require('../routes'));
        this.app.use('/api', router)



        // this.app.use(express.json());
        // this.app.use(express.urlencoded({ extended: false }));
        // this.app.use(morgan('dev'));

        // Conectar a base de datos
        // this.conectarDB();
    }

    async conectarDB() {
        await dbConnection();
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}


//module.exports = Server;
