const express = require('express');
const app = express();

const PORT = 5005;

app.get('/', (req, res) => {
    res.send('Welcome to mongoose demo');
});

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
});
