const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePathForVideos = path.join(__dirname, '../../src/data/videos.json');
const dataFilePathForVideoDetails = path.join(__dirname, '../../src/data/video-details.json');

const readData = (path) => {
    const rawData = fs.readFileSync(path);
    return JSON.parse(rawData);
};

const writeData = (data, path) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

router.get('/', (req, res) => {
    const videos = readData(dataFilePathForVideos);
    res.json(videos.map(video => ({
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
    })));
});

router.get('/:id', (req, res) => {
    const videos = readData(dataFilePathForVideoDetails);
    const video = videos.find(video => video.id === req.params.id);

    if (video) {
        res.json(video);
    } else {
        res.status(404).send({ message: 'Video not found' });
    }
});

router.post('/', (req, res) => {

    const videos = readData(dataFilePathForVideos);
    const videosWithDetails = readData(dataFilePathForVideoDetails);

    const id = (videos.length + 1).toString();
    const title = req.body.title;
    const channel = "Anonymous";
    const randomImage = `image${Math.floor(Math.random() * 9)}.jpg`;

    const newVideo = {
        id: id,
        title: title,
        channel: channel,
        image: randomImage,
    };

    const newVideoWithDetails = {
        id: id,
        title: title,
        channel: channel,
        image: randomImage,
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0",
        video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: []
    };
    videos.push(newVideo);
    videosWithDetails.push(newVideoWithDetails);
    writeData(videos, dataFilePathForVideos);
    writeData(videosWithDetails, dataFilePathForVideoDetails);

});

module.exports = router;
