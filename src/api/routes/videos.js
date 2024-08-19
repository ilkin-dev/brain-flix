const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePathForVideos = path.join(__dirname, '../data/videos.json');
const dataFilePathForVideoDetails = path.join(__dirname, '../data/video-details.json');

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

    const id = create_UUID();
    const title = req.body.title;
    const channel = "Anonymous";
    const randomImage = `http://localhost:8080/public/images/image${Math.floor(Math.random() * 9)}.jpg`;

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
    res.json(videos);
});

router.post('/:id/comments', (req, res) => {
    const videos = readData(dataFilePathForVideoDetails);
    const video = videos.find(vid => vid.id === req.params.id);
    if (video) {
        const newComment = {
            id: create_UUID(),
            name: 'Anonymous',
            comment: req.body.comment,
            likes: 0,
            timestamp: Date.now()
        }
        video.comments.unshift(newComment);
        writeData(videos, dataFilePathForVideoDetails);
        res.status(201).json(newComment);
    } else {
        res.status(404).send({ error: "Video not found" });
    }
})

router.delete('/:id/comments/:commentId', (req, res) => {
    const videos = readData(dataFilePathForVideoDetails);
    const video = videos.find(vid => vid.id === req.params.id);

    console.log(req.params.commentId);

    if (video) {
        console.log(`Video found: ${video.title}`);
        const originalLength = video.comments.length;
        video.comments = video.comments.filter(c => c.id !== req.params.commentId);
        if (video.comments.length < originalLength) {
            writeData(videos, dataFilePathForVideoDetails);
            res.status(204).send();
        } else {
            res.status(404).send({ error: "Comment not found" });
        }
    } else {
        res.status(404).send({ error: "Video not found" });
    }
});

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

module.exports = router;
