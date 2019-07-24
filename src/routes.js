const express = require('express');
const routes  = express.Router();

const EventController = require("./controllers/EventController");
const UserController = require("./controllers/UserController");
const ParticipationController = require("./controllers/ParticipationController");


routes.get("/", EventController.index);

routes.get("/events", EventController.index);
routes.post("/events", EventController.create);
routes.get("/events/:id", EventController.show);
routes.put("/events/:id", EventController.update);
routes.delete("/events/:id", EventController.destroy);

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

const participations = express.Router({mergeParams: true});

participations.post("/participations", ParticipationController.create);
participations.delete("/participations/:id", ParticipationController.destroy);

routes.use('/:events/:eventId', participations);

module.exports = routes;