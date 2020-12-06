const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var onlineUsers = 0;

http.listen(5050, function () {
    console.log('[SERVER STARTED AT PORT 5050]');
})


app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname + '/public'));


io.on('connection', function (socket) {
    console.log('[SOCKET CONNECTED]' + socket.id);

    socket.on('join-chat', function (userName) {
        console.log('[USER JOINED CHAT]', socket.id, userName);
        chatUsers[socket.id] = userName;
        socket.join('chat');
        onlineUsers = Object.keys(chatUsers).length;
        io.to('chat').emit('online-users', onlineUsers);
        io.to('chat').emit('joined-chat', userName);
    })


    socket.on('send-message', function (message, color) {
        console.log('[USER SENT MESSAGE]', message, color);
        io.to('chat').emit('new-message', `${chatUsers[socket.id]}:`, `${message}`, color);
    })

    socket.on('leave-chat', function () {
        console.log('[USER LEFT CHAT]', socket.id);
        const name = chatUsers[socket.id];
        delete chatUsers[socket.id];
        socket.leave('chat');
        io.emit('left-chat', { onlineUsers: Object.keys(chatUsers).length, name: name });
        socket.emit('menu');
    })
})
const chatUsers = {};