const http = require('http');
const express = require('express');
const data = require('./data');
// The express is now included in our package

// config variables
const hostname = '127.0.0.1';
const port = 3000;

// It is what it will be handling all the diff req and create express app
const app = express()

// we're telling it to look for things in teh public folder before the computer loads up the rest of the files

app.use(express.static('./public'))


// Allows us to load up characters 
app.get('/api/v1/characters', (req, res) => {
    res.json(data.characters)
});

// Allows us to load up episodes
app.get('/api/v1/episodes', (req,res) => {
    res.send(data.episodes)
  })

// Getting specific names using query param
app.get('/name', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchForName = data.episodes.filter((episode) => episode.name.toLowerCase() == (search.toLowerCase))
    return res.json(searchForName) 
  } else {
    res.send(data.episodes)
  }
})


// Here we are able to look up character based on Id, if we don't find a matching Id, users will be prompted with an error
app.get('/api/v1/characters/:characterID', (req, res) => {
    const characterId = req.params.characterID
    let character = null
    for (let currentCharacter of data.characters) {
        if (currentCharacter.id == characterId) {
            character = currentCharacter
        }
    }
    if (character === null) {
        res.status(404).json({ error: 'could not find that character id: ' + characterId })
    }
    res.json(character)
});

// Here we are getting episodes of our Id's, similar to character id, if we do not find the specific Id, we will be prompted with a error
app.get("/api/v1/episodes/:episodeID", (req, res) => {
    const episodeID = req.params.episodeID;
    let episode = null;
    for (let currentEpisode of data.episodes) {
      if (currentEpisode.id == episodeID) {
        episode = currentEpisode;
      }
    }
  
    if (episode === null) {
      res.status(404).json({ error: "Could not find that episode Id: " + episodeID });
    } else {
      res.json(episode);
      return;
    }
    res.json(episode);
  });


  // This is equivalent to a 404 message or error, if we add on a page that doesn't exist, it will display the message
  app.get('*', (req, res) => {
      res.send('This page was not found, but you can stay and have a drink.')
  })

  // create http servers and handle requests with express app
  const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});