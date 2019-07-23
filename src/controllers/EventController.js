const Event = require("../models/Event");
const {parse, stringify} = require('flatted/cjs');

class EventController {

    async index(req, res) { 
        const events = await Event.find({});
        return res.json(events);
    }

    async create(req, res) { 
        const event = await Event.create({title: req.body.title, 
                                          local: req.body.local,
                                          date: req.body.date,
                                          });

        return res.json(event);
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