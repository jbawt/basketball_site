require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors())


app.get('/', (req, res) => {
  res.status(200).json('basketball updates');
});

app.get('/teams', (req, res) => {
  const options = {
    method: 'GET',
    url: process.env.TEAMURL,
    headers: {
      'x-rapidapi-key': process.env.KEY,
      'x-rapidapi-host': process.env.HOST
    }
  }

  axios.request(options)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => console.log(err));
})

app.get('/stats', (req, res) => {

  const id = req.query.id;
  
  const options = {
    method: 'GET',
    url: `https://api-nba-v1.p.rapidapi.com/games/teamId/${id}`,
    headers: {
      'x-rapidapi-key': process.env.KEY,
      'x-rapidapi-host': process.env.HOST
    }
  }

  axios.request(options)
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(err => console.log(err))
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
});