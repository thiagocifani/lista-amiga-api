const Participation = require("../models/Participation");
const Event = require("../models/Event");

class ParticipationController {
    async create(req, res) {
        const event = await Event.findById(req.params.eventId);
        const participation = await Participation.create({
            user: req.body.userId,
            event: req.params.eventId
        });

        event.participations.push(participation);
        event.save();

        return res.json(participation);
    }

    async destroy(req, res) {
        const event = await Event.findById(req.params.eventId);

        return res.json(participation);
    }
}

module.exports = new ParticipationController();