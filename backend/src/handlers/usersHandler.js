const getUserHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const result = name ? await getUserNameController(name) : await getAllUsersController()
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  };

  const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await getUserByIdController(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  const createUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
      const result = await createUserController(name, email, phone);
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  };

  const deleteUserHandler = async (req,res) => {}
  const updateUserHandler = async (req,res) => {}

  module.exports = {
    createUserHandler,
    getUserByIdHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler
  }
