const http = require("http");
const express = require("express");
const path = require('path');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', async (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'index.html'))
});

app.get('/document1', async (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'document1.html'))
});

app.get('/document2', async (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'document2.html'))
});

app.get('/index.css', async (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'index.css'));
})

const listener = server.listen(80, function(){
    console.log('Tu servidor esta en el puerto ' + listener.address().port)
});
