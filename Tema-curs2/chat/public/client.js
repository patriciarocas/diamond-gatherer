const socket = io();


document.getElementById('join-chat-button').addEventListener('click', function () {
    const input = document.getElementById('user-name-input');
    let userName = input.value;
    if (userName.length > 0) {
        document.getElementById('user-name-missing').classList.add('display-none');
        socket.emit('join-chat', userName);
    } else {
        document.getElementById('user-name-missing').classList.remove('display-none');
    }
})

socket.on('joined-chat', function (userName) {
    console.log('You joined chat!');
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `${userName} joined chat`
    messagesContainer.appendChild(messageElement);
    document.getElementById('menu').classList.add('display-none');
    document.getElementById('chat-container').classList.remove('display-none');
})

socket.on('online-users', function (onlineUsers) {
    console.log('online users', onlineUsers);
    document.getElementById('online-users').innerHTML = 'Online users' + onlineUsers;
})


document.getElementById('send-message-button').addEventListener('click', function () {
    const input = document.getElementById('message');
    const inputColor = document.getElementById('color');
    const message = input.value;
    const color = inputColor.value;
    socket.emit('send-message', message, color);
    document.getElementById('message').value = '';
})

socket.on('new-message', function (username, message, color) {
    console.log(color);
    const messagesContainer = document.getElementById('chat-messages');
    const usernameElement = document.createElement('span');
    usernameElement.innerHTML = username;
    messagesContainer.appendChild(usernameElement);
    const messageElement = document.createElement('p');
    messageElement.style.color = color;
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})


document.getElementById('leave-chat-button').addEventListener('click', function () {
    socket.emit('leave-chat');



})
socket.on('left-chat', function (onlineUsers) {
    document.getElementById('online-users').innerHTML = 'Online users' + onlineUsers;
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `${onlineUsers.name} left chat`
    messagesContainer.appendChild(messageElement);
})


socket.on('menu', function () {
    console.log('You left chat!');
    document.getElementById('join-chat').classList.remove('display-none');
    document.getElementById('chat-container').classList.add('display-none');
})
