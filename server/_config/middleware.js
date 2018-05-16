const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = function(server) {
    server.use(helmet())
    server.use(exoress.json())
    server.use(cors())
}