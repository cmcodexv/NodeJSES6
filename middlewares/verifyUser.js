//const User = require('../models/user/user');
import User from '../models/user/user.js';

const checkDuplicateEmail = async (req, res, next) => {

    const user = await User.findOne({ correo: req.body.correo, isActive: true });

    if (user) return res.status(400).json({ message: '¡Este usuario ya existe!' });

    next();
}

// module.exports = { checkDuplicateEmail }
export default { checkDuplicateEmail };

