## Hi there! 👋

I'm [Dioka Ejionueme], a [Web Developer] based in [Nigeria]. Welcome to my GitHub profile!

### About Me

I'm deeply passionate about [Web Technologies], and I find joy in [creating beautiful and Immersive User Experiences]. My journey in the world of technology has been an exhilarating one, with a keen interest in [].

### What I Do

- 👨‍💻 I am constantly exploring and learning about [Your Field or Technology].
- 🌱 I love to share my knowledge and insights through [Projects, Articles, or Contributions].
- 🔭 Currently, I’m working on [Your Current Projects or Goals].
- 💬 Ask me about [Areas You Are Knowledgeable About or Eager to Discuss].
- 📫 You can reach me at [Your Contact Information].

### My Toolbox

I'm skilled in [Your Skills or Technologies], and I'm constantly expanding my toolkit with [Skills You're Currently Learning or Interested In].

### Let's Connect

Let's connect and collaborate on exciting projects or discussions! Feel free to explore my repositories, and I'd love to hear your thoughts or answer any questions you might have.

Connect with me on [LinkedIn, Twitter, or Any Other Social Platform], and let's create something amazing together!

### Thank You for Visiting

Thanks for stopping by! I'm looking forward to connecting with fellow developers, tech enthusiasts, or anyone who shares similar interests. Let's grow together and create something awesome!

Happy Coding! 🚀

# IdeaBox API

To be used with the React III lesson.

## Set Up

Clone down this repo. (Do **NOT** nest it inside your IdeaBox repo!)

CD into this repo.

Run `npm install`.

Run `node server.js` to start the server.

## Endpoints

### GET all ideas

URL: `http://localhost:3001/api/v1/ideas`

Sample response (200):

```js
[
  { id: 1, title: "Sweaters for pugs", description: "To keep them warm" },
  { id: 2, title: "Film a romcom", description: "But make it ghosts" },
  {
    id: 3,
    title: "A game show called Ether/Or",
    description: "When you lose you get chloroformed",
  },
];
```

### GET an idea by its id

URL: `http://localhost:3001/api/v1/ideas/:id`

Sample URL: `http://localhost:3001/api/v1/ideas/3`

Sample response (200):

```js
{id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'}
```

Sample response (404):

```js
{
  message: "No idea found with an id of 3";
}
```

### POST a new idea

URL: `http://localhost:3001/api/v1/ideas`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    title: 'Title',
    description: 'Description'
  })
}
```

Sample response (201): This is the idea that was submitted in the POST request

```js
  { id: 98623913021, title: 'Title', description: 'Description' }
```

Sample BAD request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    title: 'Title'
  })
}
```

Sample BAD response (422):

```js
{
  message: "You are missing a required parameter of description";
}
```

### DELETE an idea

URL: `http://localhost:3001/api/v1/ideas/:id`

Sample URL: `http://localhost:3001/api/v1/ideas/2`

Sample response (204): no content in the body, nothing to parse

Sample BAD response (404):

```js
{
  message: "No idea found with an id of 2";
}
```
