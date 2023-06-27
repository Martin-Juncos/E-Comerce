const { Sequelize } = require("sequelize")
const productModel = require("../models/Product")

const DB_USER = "postgres"
const DB_PASSWORD = "postgres"
const DB_HOST = "localhost:5432"

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Proyecto`, {logging: false})


productModel(database)

const { Product } = database.models


module.exports = {database, ...database.models}