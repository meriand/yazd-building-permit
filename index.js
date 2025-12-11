const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('سلام، جهان!');
});

app.listen(port, () => {
    console.log(`سرور در http://localhost:${port} اجرا می‌شود`);
});

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);
