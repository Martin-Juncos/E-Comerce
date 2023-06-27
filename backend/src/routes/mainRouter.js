const { Router } = require("express");
const { productsRoutes } = require("./productsRoute");
const { categoryRoutes } = require("./categoryRoutes")
const mainRouter = Router();


mainRouter.use("/products", productsRoutes) 
mainRouter.use("/category", categoryRoutes)

module.exports = mainRouter;