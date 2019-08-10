const bcrypt = require('bcrypt');
const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.find({});
        return res.json(users);
    }

    async create(req, res, next) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, encryptedPassword) {
                if(err) {
                    return res.status(500).json({ error: err });
                } else {
                    try {
                        const user = await User.create({ name: req.body.name,
                            email: req.body.email,
                            password: encryptedPassword });
                    
                        return res.status(200).json(user);
                    } catch(err) {
                        return next(err);
                    }
                }
            });
        });
    }

    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(req.userData);
    }

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.json(user);
    }

    async destroy(req, res) {
        const user = await User.findById(req.params.id).remove();
        return res.json(user);
    }
}

module.exports = new UserController();