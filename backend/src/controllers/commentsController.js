const { Comment } = require("../db/db.js");


const getAllCommentsController = async () => {
    const response = await Comment.findAll()
    return await response
}
const getCommentsByIdController = async (id) => {
    const data = await Comment.findByPk(id)
    return data
}



const createCommentController = async (text) => {
    const comments = await Comment.findOrCreate({
        where: {text}
    })
    return comments
}



module.exports = {

    getAllCommentsController,
    getCommentsByIdController,
    createCommentController
}