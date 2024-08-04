const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videos');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/public', express.static('public'));

app.use('/videos', videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
