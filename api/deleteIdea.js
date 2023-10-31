const { send } = require('micro');
const cors = require('micro-cors')();

module.exports = cors(async (req, res) => {
  if (req.method === 'DELETE') {
    // Assuming the ID is sent as a query parameter
    const { id } = req.query;

    // Your logic to delete an idea here
    // Example: check if the idea with the given ID exists and delete it
    // Replace this example with your actual logic to delete the idea

    if (id) {
      // Assume the deletion is successful, returning a 204 status code
      return send(res, 204);
    } else {
      return send(res, 404, { message: 'Idea not found' });
    }
  } else {
    return send(res, 405, { message: 'Method Not Allowed' });
  }
});
