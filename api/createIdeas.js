const cors = require('micro-cors')({
    origin: true,
    methods: ['POST'], // Define the allowed methods
  });
  
  module.exports = (req, res) => {
    cors(req, res, () => {
      if (req.method === 'POST') {
        // Your POST method logic here
        res.status(201).json({ message: 'Idea created' });
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
    });
  };
  
  