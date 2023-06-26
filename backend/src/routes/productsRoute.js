const { Router } = require("express");
const { getProductsHandler, createProductHandler, updateProductHandler, deleteProductHandler } = require("../handlers/productsHandler");

const productsRoutes = Router()

productsRoutes.get("/",getProductsHandler) //getAllProductsHandler
productsRoutes.post("/",createProductHandler)//createProductHandler
productsRoutes.put("/:id",updateProductHandler)//updateProductHandler
productsRoutes.delete("/:id",deleteProductHandler)//deleteProductHandler

module.exports = {productsRoutes}