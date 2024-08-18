const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const response = await axios.post('https://api.hubapi.com/crm/v3/objects/contacts', req.body, {
      headers: { Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}` },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error pushing data to CRM' });
  }
});

module.exports = router;
