const ideas = [
    { id: 1, title: 'Sweaters for pugs', description: 'To keep them warm' },
    { id: 2, title: 'A romcom', description: 'But make it ghosts'},
    { id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get an un-potty trained puppy'},
    // Add other ideas as needed
  ];
  
  module.exports = (req, res) => {
    if (req.method === 'GET') {
      const id = req.query.id; // Assuming the id is sent as a query parameter
      const idea = ideas.find((idea) => idea.id === parseInt(id, 10));
  
      if (idea) {
        res.status(200).json(idea);
      } else {
        res.status(404).json({ message: 'Idea not found' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  