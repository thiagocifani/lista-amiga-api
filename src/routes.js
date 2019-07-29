const express = require('express');
const routes  = express.Router();

const EventController = require("./controllers/EventController");
const StateController = require("./controllers/StateController");
const CityController = require("./controllers/CityController");
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

routes.get("/states", StateController.index);
routes.post("/states", StateController.create);
routes.delete("/states/:id", StateController.destroy);

const participations = express.Router({mergeParams: true});

participations.post("/participations", ParticipationController.create);
participations.delete("/participations/:id", ParticipationController.destroy);

routes.use('/:events/:eventId', participations);

const cities = express.Router({mergeParams: true});

cities.get("/cities", CityController.index);
cities.post("/cities", CityController.create);
cities.delete("/cities/:id", CityController.destroy);

routes.use('/:states/:stateId', cities);

module.exports = routes;