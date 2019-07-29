const State = require("../models/State");

class StateController {

    async index(req, res, next) {
        try {
            const states = await State.find({}).populate('cities');

            if(states.length >= 1) {
                return res.status(200).json(states);
            } else {
                return res.status(404).json({ error: "Nao encontrado"});
            }
        } catch(err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const state = await State.create(req.body);
            return res.status(201).json(state);
        } catch(err) {
            next(err);
        }
    }

    async destroy(req, res, next) {
        try {
            const state = await State.deleteOne({ id: req.body.id });
            return res.status(200).json(state);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = new StateController();