const { Router } = require("express");

const {
  getProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
} = require("../handlers/productsHandler");

const productsRoutes = Router();

productsRoutes.get("/", getProductsHandler);
productsRoutes.get("/:id", getProductByIdHandler);
productsRoutes.post("/", createProductHandler);
productsRoutes.put("/:id", updateProductHandler);
productsRoutes.delete("/:id", deleteProductHandler);

module.exports = { productsRoutes };
