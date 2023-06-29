const { Router } = require("express");
const { productsRoutes } = require("./productsRoute");
const { categoryRoutes } = require("./categoryRoutes")
const { userRoutes } = require("./userRoutes")

const mainRouter = Router();




mainRouter.use("/products", productsRoutes)
mainRouter.use("/category", categoryRoutes)
mainRouter.use("/users", userRoutes)

module.exports = mainRouter;