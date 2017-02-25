var socket = io();

socket.on('connect', function () {
    console.log('connected to server')

    socket.emit('createMessage', {
        from: 'fuladno@gmail.com',
        text: 'lodaosdl alsdlasdlaosdladsol'
    })
});

socket.on('disconnect', function () {
    console.log('disconnected to server');
});

socket.on('newMessage', function(message) {
    console.log(message.from, message.text);
});
