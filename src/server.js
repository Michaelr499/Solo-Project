const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));


const weatherApiRouter = require('../routes/router.js');

app.use('/weather', weatherApiRouter);

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname + '../public/index.html'));
});

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname + '../public/style.css'));
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
