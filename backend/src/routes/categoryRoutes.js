const { Router } = require("express")

const { getAllCategoriesHandler } = require("../handlers/productsHandler")

const categoryRoutes = Router()

categoryRoutes.get("/", getAllCategoriesHandler)

module.exports = {
    categoryRoutes
}
