const { json, send } = require('micro');
const cors = require('micro-cors')();

module.exports = cors(async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await json(req); // Parse the incoming JSON data
      // Example: assuming the incoming data includes 'title' and 'description'
      const { title, description } = data;

      // Your logic to create an idea here
      // For demonstration, create a sample idea
      const newIdea = { id: 4, title, description }; // Assuming ID 4 for the new idea

      // Return the newly created idea or persist it in a database
      return send(res, 201, newIdea);
    } catch (error) {
      return send(res, 400, { message: 'Invalid or missing data' });
    }
  } else {
    return send(res, 405, { message: 'Method Not Allowed' });
  }
});
