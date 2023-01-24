const express = require("express");
const homeRouter = express.Router();
//const homeController = require("../controllers/homeController");

homeRouter.get("/", (req, res) => {
    res.send("<h1>Main page</h1>");
});
homeRouter.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
});
homeRouter.get("/contacts", (req, res) => {
    res.send("<h1>Contacts page</h1>");
});
homeRouter.get("/news", (req, res) => {
    res.send("<h1>News page</h1>");
});

module.exports = homeRouter;