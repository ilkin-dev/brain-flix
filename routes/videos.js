const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../src/data/videos.json');

router.get('/', (req, res) => {
    const videos = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(videos.map(video => ({
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        description: video.description,
        views: video.views,
        likes: video.likes,
        duration: video.duration,
        video: video.video,
        timestamp: video.timestamp,
    })));
});

router.get('/:id', (req, res) => {
    const videos = JSON.parse(fs.readFileSync(dataFilePath));
    const video = videos.find(video => video.id === req.params.id);

    if (video) {
        res.json(video);
    } else {
        res.status(404).send({ message: 'Video not found' });
    }
});

module.exports = router;
