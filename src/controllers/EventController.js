const Event = require("../models/Event");

class EventController {

    async index(req, res) { 
        const events = await Event.find({}).populate('participations');
        return res.status(200).json(events);
    }

    async create(req, res, next) {
        try {
            const event = await Event.create(req.body);

            return res.status(200).json(event);
        } catch(err) {
            return next(err);
        }
    }

    async show(req, res) { 
        const event = await Event.findById(req.params.id);

        return res.json(event);
    }

    async update(req, res) { 
        const event = await Event.findByIdAndUpdate(req.params.id, {$set: req.body});
     
        return res.json(event);
    }

    async destroy(req, res) { 
        const event = await Event.findById(req.params.id).remove();
        return res.json(event);
    }
}

module.exports = new EventController();
