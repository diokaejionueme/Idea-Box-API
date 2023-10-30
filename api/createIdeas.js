let ideas = [
    { id: 1, title: 'Sweaters for pugs', description: 'To keep them warm' },
    { id: 2, title: 'A romcom', description: 'But make it ghosts'},
    { id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get an un-potty trained puppy'}
  ];
  
  module.exports = (req, res) => {
    if (req.method === 'POST') {
      const { title, description } = req.body;
  
      if (title && description) {
        const newIdea = {
          id: ideas.length + 1,
          title,
          description,
        };
        ideas.push(newIdea);
        res.status(201).json(newIdea);
      } else {
        res.status(400).json({ message: 'Missing title or description' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  