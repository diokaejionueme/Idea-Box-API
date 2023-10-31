const { json, send } = require('micro');
const cors = require('micro-cors')();

module.exports = cors(async (req, res) => {
  if (req.method === 'GET') {
    // Your GET method logic here
    // Example: Fetch ideas from a database or any data source
    const ideas = [
      { id: 1, title: 'Idea 1', description: 'Description for Idea 1' },
      { id: 2, title: 'Idea 2', description: 'Description for Idea 2' }
      // Include other ideas as needed
    ];

    // Respond with fetched ideas
    return send(res, 200, ideas);
  } else {
    return send(res, 405, { message: 'Method Not Allowed' });
  }
});
