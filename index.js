const { json } = require('micro');
const { send } = require('micro');
const { router, get, post, del } = require('microrouter');
const createIdea = require('./api/createIdeas');
const getIdeas = require('./api/getIdeas');
const getIdeaById = require('./api/getIdeasById');
const deleteIdea = require('./api/deleteIdea');
const cors = require('micro-cors')();

const notFound = (req, res) => {
  send(res, 404, 'Not found route');
};

module.exports = cors(router(
  post('/api/v1/ideas', createIdea),
  get('/api/v1/ideas', getIdeas),
  get('/api/v1/ideas/:id', getIdeaById),
  del('/api/v1/ideas/:id', deleteIdea),
  get('/*', notFound) // To handle other routes
));
