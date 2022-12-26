const transacionController = {
  successfulTransaction: async (req, res) => {
    const payload = req.body;
    res.send(payload);
  },
};

module.exports = transacionController;
