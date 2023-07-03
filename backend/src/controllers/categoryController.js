const { Category } = require("../db/db.js")


const getAllCategoriesController = async () => {
  const response = await Category.findAll()

  response.map((e)=> {
    CategoryfindOrCreate({
      where: {name: e.name}
    })
  })

  return await Category.findAll()
 }
  
const createCategoryController = async (name) => {
  
  const categories = await Category.findOrCreate({
    where: {name}
  })
  
  return categories
}
 



module.exports = {
    getAllCategoriesController,
    createCategoryController
}