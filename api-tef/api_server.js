
require('express-async-errors')

const express = require('express');
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');

var api_controller = require("./api_controller");

const server = express();

server.use(express.json());
server.use(cors());;

//*********SECURITY*********

// Cross-site scripting (XSS)
server.use(xss());

// Separar o cabeçalho em vários pedaços
server.use(helmet());

//*********SECURITY*********


server.get("/api-tef/obterFormaPagamento", api_controller.obterFormaPagamento);
server.post("/api-tef/gravarPagamento", api_controller.gravarPagamento);

exports.server = server;
