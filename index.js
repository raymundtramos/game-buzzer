const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/buzzer', (req, res) => {
    res.sendFile(path.join(__dirname, 'buzzer.html'));
});

app.get('/socket.io.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/node_modules/socket.io-client/dist/socket.io.js'));
});

io.on('connection', (socket) => {
    socket.on('register', (data) => {
        socket.broadcast.emit('register', data);
    });

    socket.on('buzz', (data) => {
        socket.broadcast.emit('buzz', data);
    });

    socket.on('lock', () => {
        socket.broadcast.emit('lock');
    });

    socket.on('unlock', () => {
        socket.broadcast.emit('unlock');
    });
});

server.listen(process.env.PORT || 3000);