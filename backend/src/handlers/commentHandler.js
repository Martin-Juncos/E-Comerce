const {
  getAllCommentsController,
  getCommentsByIdController,
  createCommentController,
} = require("../controllers/commentsController");

const createCommentHandler = async (req, res) => {
    const { text} = req.body
//productId?
try {
    const result = await createCommentController(text)
    res.status(201).json(result);
} catch (error) {
    res.status(404).json({ error: error.message });
}

};
const getAllCommentsHandler = async (req, res) => {
    try {
        const result = await getAllCommentsController()
      res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getCommentsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getCommentsByIdController(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createCommentHandler,
  getAllCommentsHandler,
  getCommentsByIdHandler,
};
