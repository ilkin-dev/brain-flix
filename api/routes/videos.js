const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../../src/data/videos.json');

const readData = () => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

router.get('/', (req, res) => {
    const videos = readData();
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
    const videos = readData();
    const video = videos.find(video => video.id === req.params.id);

    if (video) {
        res.json(video);
    } else {
        res.status(404).send({ message: 'Video not found' });
    }
});

router.post('/', (req, res) => {
    const randomImage = `image${Math.floor(Math.random() * 9)}.jpg`;

    const videos = readData();
    const newVideo = {
        id: (videos.length + 1).toString(),
        title: req.body.title,
        channel: "Anonymous",
        image: randomImage,
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0",
        video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
        timestamp: Date.now(),
    };
    videos.push(newVideo);
    writeData(videos);

});

module.exports = router;
