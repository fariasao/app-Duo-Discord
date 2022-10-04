import express from 'express';

const app = express();

app.get('/games', (req, res) => {
  return res.status(200).json([])
});

app.get('/ads', (req, res) => {
  return res.status(200).json([])
});

app.post('/ads', (req, res) => {
  return res.status(201).json([])
});

app.get('/ads/:id/discord', (req, res) => {
  return res.json([]);
})

app.get('/games/:id/ads', (req, res) => {
  return res.json([]);
})

app.listen(3333)