const express = require('express');

const app = express();

const PORT = 5000;

app.set('view engine', 'ejs');
app.use('/files', express.static(__dirname + '/views/files'));

app.get('/', (request, response) => {
    response.render('index');
});
app.get('/map', (request, response) => {
    response.render('map');
});
app.get('/locations', (request, response) => {
    response.render('locations');
});
app.get('/about', (request, response) => {
    response.render('about');
});

app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`);
});

console.log('Created by mrpe4enushkaa_');