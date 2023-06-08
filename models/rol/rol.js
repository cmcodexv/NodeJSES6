//const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const rolSchema = new Schema({
    nombreRol: {
        type: String,
        unique: true,
        required: true
    },

    tipoRol: {
        type: String,
        required: true
    },
    userCreacion: String,
    userModificacion: String,
    userAnulacion: String,
    fechaAnulacion: Date,



}, {
    timestamps: true,
    versionkey: false
});


//module.exports = mongoose.model('Rol', rolSchema);
export default mongoose.model('Rol', rolSchema)
