const { Comment } = require("../db/db.js");


const getAllCommentsController = async () => {
    const response = await Comment.findAll()
    return  response
}
const getCommentsByIdController = async (id) => {
    const data = await Comment.findByPk(id)
    return data
}



const createCommentController = async (productId,text,createdAt) => {
    const comment = await Comment.create({
        productId,
        text,
        createdAt
    })
    return comment
}



module.exports = {

    getAllCommentsController,
    getCommentsByIdController,
    createCommentController
}