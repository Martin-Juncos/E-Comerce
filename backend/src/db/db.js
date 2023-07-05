const { Sequelize } = require("sequelize")
const productModel = require("../models/Product.js")
const userModel = require("../models/User.js")
const categoryModel = require("../models/Category.js")


const DB_USER = "dev"
const DB_PASSWORD = "ecommerce_dev"
const DB_HOST = "164.92.70.131"

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`, {logging: false})


productModel(database)
userModel(database)
categoryModel(database)

const { Product , User, Category} = database.models





module.exports = {database, ...database.models} 