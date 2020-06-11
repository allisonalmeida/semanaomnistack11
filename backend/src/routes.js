const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidenteContoller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { join } = require('./database/connection');

const routes = express.Router();

// route shows which Ongs logged into the system
routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().length(8),
  })
}), SessionController.create);

// route to database list/file OngController
routes.get('/ongs', OngController.index);

// Ongs creation route/file OngController
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp:Joi.number().required().min(10).min(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

// route to list all incidents of a Ongs
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
}), ProfileController.index);

// route to database list/file IncidentContoller
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidenteContoller.index);

// Incidents creation route/file IncidentContoller
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
}) ,IncidenteContoller.create);

// route deletes a database incident/file IncidentController
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidenteContoller.delete);

module.exports = routes;

