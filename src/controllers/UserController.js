const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.find({});

        return res.json(users);
    }

    async create(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    }

    async show(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
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