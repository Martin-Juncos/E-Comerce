const {
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productsController");

const getProductsHandler = async (req, res) => {
  try {
    const result = await getProductsController();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getProductById();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createProductHandler = async (req, res) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = req.body;
  try {
    const result = await createProductController(
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateProductHandler = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = req.body;
  try {
    const result = await updateProductController(id, {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProductController(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
