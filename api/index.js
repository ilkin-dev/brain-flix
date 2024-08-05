const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videos');

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/src', express.static('src'));

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
