const express = require('express');
const server = express();

server.use(express.json());

// Routes and Middlewares

server.listen(4000);
