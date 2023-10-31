const cors = require('cors')({
    origin: true,
    methods: ['DELETE'], // Define the allowed methods
  });
  
  module.exports = (req, res) => {
    cors(req, res, () => {
      if (req.method === 'DELETE') {
        // Your DELETE method logic here
        res.status(204).end();
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
    });
  };
  