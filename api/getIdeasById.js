const { send } = require('micro');
const cors = require('micro-cors')();

module.exports = cors(async (req, res) => {
  if (req.method === 'GET') {
    // Your logic to fetch specific idea data here
    // For demonstration, assume req.params.id contains the idea ID
    const ideaId = req.params.id; // Assuming the ID is in the route

    // Retrieve the specific idea data or respond with an example
    // Replace this example with your actual data retrieval logic
    const idea = { id: ideaId, title: 'Specific Idea', description: 'Description for specific idea' };

    // Check if idea exists or not
    if (idea) {
      return send(res, 200, idea); // Respond with the idea data
    } else {
      return send(res, 404, { message: 'Idea not found' });
    }
  } else {
    return send(res, 405, { message: 'Method Not Allowed' });
  }
});

  
  