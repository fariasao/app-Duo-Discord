import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour';

const app = express();

app.use(express.json());
app.use(cors(
  // {
  // Origin -> Endereço que pode acessar a aplicação
  // origin: 'http://localhost:3000'
  // }
))

const prisma = new PrismaClient({
  log: ['query']
});

// List Games
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

// List Ads
app.get('/ads', async (req, res) => {
  const ads = await prisma.ad.findMany()

  return res.status(200).json(ads)
});

// Create Ad
app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const body = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
      createdAt: body.createdAt,
    }
  })

  return res.status(201).json(ad)
});

// Get Discor By Ad
app.get('/ads/:id/discord', async (req, res) => {
  const adID = req.params.id;

  const ad = await prisma.ad.findUnique({
    select: {
      discord: true,
    },
    where: {
      id: adID
    }
  })
  
  return res.json({
    Discord: ad?.discord
  });
})

// List Ads By Game
app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }));
})

app.listen(3333)