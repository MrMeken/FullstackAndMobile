const express = require("express");

const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");
const sessionController = require("./controllers/SessionController");

const routes = express.Router();

//#ONG STUFF
routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

//INCIDENT STUFF
routes.post("/incidents", incidentController.create);
routes.get("/incidents", incidentController.index);
routes.delete("/incidents/:id", incidentController.delete);

//LISTING ONG INCIDENTS 
routes.get("/profile", profileController.index);

//SESSION THINGY
routes.post("/sessions", sessionController.create);

//routes.get("/users", (request, response) => {
//    const params = request.body;
//    console.log(params);
//
//    return response.json({
//        user1: "Mateus",
//        user2: "Mikael",
//        user3: "Fernandes",
//        user4: "Costa",
//    });
//});


module.exports = routes;