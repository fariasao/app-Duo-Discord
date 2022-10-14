import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query']
});

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })

  return res.status(200).json(games)
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