const Customer = require('../models/Customer');

const addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Error saving customer data' });
  }
};

module.exports = { addCustomer };
