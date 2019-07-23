const express = require('express');
const routes  = express.Router();

const EventController = require("./controllers/EventController");

routes.get("/events", EventController.index);
routes.post("/events", EventController.create);
routes.get("/events/:id", EventController.show);
routes.put("/events/:id", EventController.update);
routes.delete("/events/:id", EventController.destroy);

routes.get('/', function(req, res) {
    res.send("Lista Amiga");
});

routes.get('/about', function(req, res) {
    res.send("About");
});

module.exports = routes;