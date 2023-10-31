const cors = require('cors')({
    origin: true,
    methods: ['GET'], // Define the allowed methods
  });
  
  module.exports = (req, res) => {
    cors(req, res, () => {
      if (req.method === 'GET') {
        // Your GET method logic here
        res.status(200).json({ data: 'Ideas data' });
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
    });
  };
  