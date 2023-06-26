const axios = require("axios")

const getProductsController = async() => {
    const products = await axios.get('https://dummyjson.com/products')
    console.log(products)
    return products

}
const createProductController = async (title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images) => {
    return await Product.create({title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images})
}
const updateProductController = async (id, {title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {
    const product = await Product.findByPk(id)
    await product.update({title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images})
    return product
}
const deleteProductController = async (id) => {
const productDelete = await Product.findByPk(id)
await productDelete.destroy()
return productDelete
}


module.exports = {
    getProductsController,
    createProductController,
    updateProductController,
    deleteProductController
}