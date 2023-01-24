const express = require("express");
const mainRoutes = express.Router();
const homeRoutes = require("./homeroutes");

mainRoutes.use("/", homeRoutes);

module.exports = mainRoutes;