// index.js (your main file)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Import your serverless functions
const createIdea = require('./api/createIdeas');
const getIdeas = require('./api/getIdeas');
const getIdeaById = require('./api/getIdeasById');
const deleteIdea = require('./api/deleteIdea');

// Define routes for your serverless functions
app.use('/api/v1/ideas', createIdea);
app.use('/api/v1/ideas', getIdeas);
app.use('/api/v1/ideas', getIdeaById);
app.use('/api/v1/ideas', deleteIdea);

// Start your server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
