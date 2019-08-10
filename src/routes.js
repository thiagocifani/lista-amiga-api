const express = require('express');
const routes  = express.Router();
const { checkToken } = require('./middleware/Authenticate');

const EventController = require("./controllers/EventController");
const StateController = require("./controllers/StateController");
const CityController = require("./controllers/CityController");
const UserController = require("./controllers/UserController");
const ParticipationController = require("./controllers/ParticipationController");
const SessionController = require("./controllers/SessionController");


routes.get("/", EventController.index);

routes.post("/login", SessionController.create);
routes.post("/logout", SessionController.destroy);

routes.get("/events", EventController.index);
routes.post("/events", checkToken, EventController.create);
routes.get("/events/:id", EventController.show);
routes.put("/events/:id", checkToken, EventController.update);
routes.delete("/events/:id", checkToken, EventController.destroy);

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.get("/users/:id", checkToken, UserController.show);
routes.put("/users/:id", checkToken, UserController.update);
routes.delete("/users/:id", checkToken, UserController.destroy);

routes.get("/states", StateController.index);
routes.post("/states", checkToken, StateController.create);
routes.delete("/states/:id", checkToken, StateController.destroy);

const participations = express.Router({mergeParams: true});

participations.post("/participations", checkToken, ParticipationController.create);
participations.delete("/participations/:id", checkToken, ParticipationController.destroy);

routes.use('/:events/:eventId', participations);

const cities = express.Router({mergeParams: true});

cities.get("/cities", CityController.index);
cities.post("/cities", checkToken, CityController.create);
cities.delete("/cities/:id", checkToken, CityController.destroy);

routes.use('/:states/:stateId', cities);

module.exports = routes;