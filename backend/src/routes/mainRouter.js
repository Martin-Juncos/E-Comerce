const { Router } = require("express");
const { productsRoutes } = require("./productsRoute");

const mainRouter = Router();


mainRouter.use("/products", productsRoutes) 

module.exports = mainRouter;