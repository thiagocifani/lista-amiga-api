const City = require("../models/City");
const State = require("../models/State");

class CityController {

    async index(req, res, next) {
        try {
            const cities = await City.find({}).populate('state');

            if(cities.length >= 1) {
                return res.status(200).json(cities);
            } else {
                return res.status(404).json({ error: "Nao encontrado"});
            }
        } catch(err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            console.log(req.params);
            const state = await State.findById(req.params.stateId);

            if(!state) {
                return res.status(500).json({ error: 'Estado não encontrado.'});
            }

            const city = await City.create({
                name: req.body.name,
                state: req.params.stateId
            });

            state.cities.push(city);
            state.save();

            return res.status(201).json(city);
        } catch(err) {
            next(err);
        }
    }

    async destroy(req, res, next) {
        try {
            const city = await City.deleteOne({ id: req.body.id });
            return res.status(200).json(city);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = new CityController();