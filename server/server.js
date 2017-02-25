const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connect');

    socket.on('createMessage', (newMessage) => {
        socket.emit('newMessage', newMessage)
    });


    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

server.listen(port, () => console.log(`Server is up on port: ${port}`))


