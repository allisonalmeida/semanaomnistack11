const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errors());

module.exports = server;


/**
 * Métodos HTTP:
 * 
 * GET: Busca uma informação no back-end.
 * POST: Cria uma informação no back-end.
 * PUT: Altera uma informação no back-end.
 * DELETE: Deleta uma informação no back-end.
 * 
 */

/**
 * Tipos de parâmentros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * Banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, etc..
 * NoSQL: MongoDB, etc..
 * 
 * Configuração:
 * 
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*')
 */