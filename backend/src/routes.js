const express = require('express');

const OngController = require('./controllers/OngController');
const IncidenteContoller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// route shows which Ongs logged into the system
routes.post('/sessions', SessionController.create);

// route to database list/file OngController
routes.get('/ongs', OngController.index);

// Ongs creation route/file OngController
routes.post('/ongs', OngController.create);

// route to list all incidents of a Ongs
routes.get('/profile', ProfileController.index);

// route to database list/file IncidentContoller
routes.get('/incidents', IncidenteContoller.index);

// Incidents creation route/file IncidentContoller
routes.post('/incidents', IncidenteContoller.create);

// route deletes a database incident/file IncidentController
routes.delete('/incidents/:id', IncidenteContoller.delete);

module.exports = routes;