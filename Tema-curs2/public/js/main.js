// import { Person } from './person.js';

const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

//Tema 2
// //Exercitiul 1
// let prop = ['Love', 'I', 'Javascript']

// let pos = 0;
// let n =2;
// let removeItems = prop.splice(pos, n);

// let newLength = prop.unshift('Love');
// let newLength1 = prop.unshift('I');

// console.log(prop);

// //Exercitiul 2
// const arr = ["Paul", 1, false, {name: "Jon Snow"}, [1,2,3], null, undefined,
// function(){console.log('Test')}];

// arr.forEach(function(item, index,) {
//     console.log("Pozitia:" + index + " " + "valoarea:" + item +" " + "tipul:" + typeof item );
// })

// //Exercitiul 3 si 4

// const mario = new Image();
// mario.src = 'assets/mario.png'
// const MARIO_WIDTH = 32;
// const MARIO_HEIGHT = 39;
// let marioX = 0;
// let marioY = 0;
// mario.onload = () => {
//     context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
// }

// document.addEventListener("keydown", function(event,keyCode) {
//     context.clearRect(0, 0, 600, 400);
//     var [WIDTH, HEIGHT] =  [canvas.width, canvas.height]
//     switch(event.keyCode) {
//         case 87 : {
//             if(marioY> 0){marioY -= 10;}
//             break;
//     }
//         case 83:
//            {
//             if(marioY< HEIGHT -30){marioY += 10;}
//             break;
//            }
//         case 65: 
//         {
//             if(marioX> 0){marioX -= 10;}
//             break;
//         }
//         case 68: {
//             if(marioX< WIDTH -30){marioX += 10;}
//             break;
//         }
//     }

//     context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
// });


// //Exercitiul 5
// const pinkButton = document.getElementById("myButton");
// pinkButton.addEventListener("click", function() {
//     console.log(this);
//     context.fillStyle = "black";
//     context.fillRect(100, 100, 100, 100);
// });

// //Exercitiul 6
// const pers1 = new Person("Ana", 12, 165, 50, "green");
// const pers2 = new Person("Ionel", 30, 175, 80, "blue" );
// const pers3 = new Person("Ioana", 20, 170, 55, "brown");

// console.log(pers1.walk());
// console.log(pers2.walk());
// console.log(pers3.walk());

// console.log(pers1.read());
// console.log(pers2.read());
// console.log(pers3.read());

// console.log(pers1.write());
// console.log(pers2.write());
// console.log(pers3.write());


//  //Exercitiul 1  Tema 3 
// var count = 0;

// (function() {
//     var socket = io.connect();

//     socket.on('count', function (count) {
//       ('#count').text(count);
//     });

//     ('button').click(function () {
//       socket.emit('inc');
//     });
// });
//  const myButton = document.getElementById("myButton");
//  myButton.addEventListener("click", function() {
//     console.log(count++);
//     document.getElementById('showCounter').textContent = count;
// });


//CHAT

// document.getElementById('join-chat-button').addEventListener('click', function() {
//     const input = document.getElementById('user-name-input');
//     let userName = input.value;
//     if (userName.length > 0) {
//         document.getElementById('user-name-missing').classList.add('display-none');
//         socket.emit('join-chat', userName);
//     } else {
//         document.getElementById('user-name-missing').classList.remove('display-none');
//     }
// })

// socket.on('joined-chat', function(userName) {
//     console.log('You joined chat!');
//     const messagesContainer = document.getElementById('chat-messages');
//     const messageElement = document.createElement('p');
//     messageElement.innerHTML = `${userName} joined chat`
//     messagesContainer.appendChild(messageElement);  
//     document.getElementById('menu').classList.add('display-none');
//     document.getElementById('chat-container').classList.remove('display-none');
// })

// socket.on('online-users', function(onlineUsers){
//   console.log ('online users', onlineUsers);
//     document.getElementById('online-users').innerHTML ='Online users' +  onlineUsers;
// })


// document.getElementById('send-message-button').addEventListener('click', function() {
//     const input = document.getElementById('message');
//     const inputColor = document.getElementById('color');
//     const message = input.value;
//     const color = inputColor.value;
//     socket.emit('send-message', message, color);
//     document.getElementById('message').value='';
// })

// socket.on('new-message', function(username, message, color) {
//     console.log(color);
//     const messagesContainer = document.getElementById('chat-messages');
//     const usernameElement = document.createElement('span');
//     usernameElement.innerHTML = username;
//     messagesContainer.appendChild(usernameElement);
//     const messageElement = document.createElement('p');
//     messageElement.style.color=color;
//     messageElement.innerHTML = message;
//     messagesContainer.appendChild(messageElement);
// })


// document.getElementById('leave-chat-button').addEventListener('click', function () {
//     socket.emit('leave-chat');



// })
// socket.on('left-chat', function(onlineUsers) {
//     document.getElementById('online-users').innerHTML ='Online users' +  onlineUsers;
//     const messagesContainer = document.getElementById('chat-messages');
//     const messageElement = document.createElement('p');
//     messageElement.innerHTML = `${onlineUsers.name} left chat` 
//     messagesContainer.appendChild(messageElement);  
// })


// socket.on('menu', function() {
//     console.log('You left chat!');
//     document.getElementById('menu').classList.remove('display-none');
//     document.getElementById('chat-container').classList.add('display-none');
// })



const socket = io();

document.getElementById('create-game-button').addEventListener('click', function () {
    const input = document.getElementById('game-name-input');
    const gameName = input.value;
    if (gameName.length > 0) {
        document.getElementById('game-name-missing').classList.add('display-none');
        socket.emit('create-game', gameName);
    } else {
        document.getElementById('game-name-missing').classList.remove('display-none');
    }
})

socket.on('game-loop', function (objectsForDraw) {
    document.getElementById('menu').classList.add('display-none');
    document.getElementById('game-container').classList.remove('display-none');
    context.drawImage(document.getElementById('map-image'), 0, 0);

    objectsForDraw.forEach(function (objectForDraw) {
        context.drawImage(
            document.getElementById(objectForDraw.imageId),
            ...objectForDraw.drawImageParameters
        )
    })
})

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'ArrowUp':
            socket.emit('start-moving-player', 'up');
            break;
        case 'ArrowDown': {
            socket.emit('start-moving-player', 'down');
            break;
        }
        case 'ArrowLeft': {
            socket.emit('start-moving-player', 'left');
            break;
        }
        case 'ArrowRight': {
            socket.emit('start-moving-player', 'right');
            break;
        }
    }
})

document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown': {
            socket.emit('stop-moving-player', 'dy');
            break;
        }
        case 'ArrowLeft':
        case 'ArrowRight': {
            socket.emit('stop-moving-player', 'dx');
            break;
        }
    }
})

socket.on('add-game-to-list', function (options) {
    const gameElementContainer = document.createElement('div');
    gameElementContainer.classList.add('game-element');
    gameElementContainer.id = options.gameId;

    const gameNameElement = document.createElement('p');
    gameNameElement.innerHTML = options.gameName;
    const joinGameButton = document.createElement('button');
    joinGameButton.innerHTML = 'Join Game!';

    joinGameButton.addEventListener('click', function () {
        socket.emit('join-game', options.gameId);
    })

    gameElementContainer.appendChild(gameNameElement);
    gameElementContainer.appendChild(joinGameButton);

    document.getElementById('game-list').appendChild(gameElementContainer);
})

socket.on('remove-game-from-list', function (gameId) {
    document.getElementById(gameId).classList.add('display-none');
})

socket.on('game-over', function (reason) {
    console.log('Game Over', reason);

    context.font = "30px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("Game Over", canvas.width / 2, canvas.height / 2);
})

document.getElementById('back-to-menu-button').addEventListener('click', function () {
    socket.emit('leave-game');

})
socket.on('menu', function () {
    console.log('You left game!');
    document.getElementById('create-game-container').classList.remove('display-none');
    document.getElementById('game-container').classList.add('display-none');
})


//Exercitiul 4 Tema 4
const arr = [1, -2, 6, -7, 10, 9, 14, true, false, null, undefined];

var numbers = arr.filter(numbersOnly);

function numbersOnly(value) {
    //console.log (value); 

    if (typeof (value) === 'number') {
        return value;
    }
}
console.log(numbers);

const multiplication = numbers.map(x => x*10);
console.log(multiplication);


var result = multiplication.reduce((a,b) => a + b , 0)
console.log(result);

