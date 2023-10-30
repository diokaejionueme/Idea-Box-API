const ideas = [
    { id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'}, 
    { id: 2, title: 'A romcom', description: 'But make it ghosts'},
    { id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get an un-potty trained puppy'}
    
    // Add other ideas as needed
  ];
  
  module.exports = (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json(ideas);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  