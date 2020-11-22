import { Person } from './person.js';

const canvas =  document.getElementById("canvasId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

//Exercitiul 1
let prop = ['Love', 'I', 'Javascript']

let pos = 0;
let n =2;
let removeItems = prop.splice(pos, n);

let newLength = prop.unshift('Love');
let newLength1 = prop.unshift('I');

console.log(prop);

//Exercitiul 2
const arr = ["Paul", 1, false, {name: "Jon Snow"}, [1,2,3], null, undefined,
function(){console.log('Test')}];

arr.forEach(function(item, index,) {
    console.log("Pozitia:" + index + " " + "valoarea:" + item +" " + "tipul:" + typeof item );
})

//Exercitiul 3 si 4

const mario = new Image();
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
let marioX = 0;
let marioY = 0;
mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}

document.addEventListener("keydown", function(event,keyCode) {
    context.clearRect(0, 0, 600, 400);
    var [WIDTH, HEIGHT] =  [canvas.width, canvas.height]
    switch(event.keyCode) {
        case 87 : {
            if(marioY> 0){marioY -= 10;}
            break;
    }
        case 83:
           {
            if(marioY< HEIGHT -30){marioY += 10;}
            break;
           }
        case 65: 
        {
            if(marioX> 0){marioX -= 10;}
            break;
        }
        case 68: {
            if(marioX< WIDTH -30){marioX += 10;}
            break;
        }
    }

    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
});


//Exercitiul 5
const pinkButton = document.getElementById("myButton");
pinkButton.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = "black";
    context.fillRect(100, 100, 100, 100);
});

//Exercitiul 6
const pers1 = new Person("Ana", 12, 165, 50, "green");
const pers2 = new Person("Ionel", 30, 175, 80, "blue" );
const pers3 = new Person("Ioana", 20, 170, 55, "brown");

console.log(pers1.walk());
console.log(pers2.walk());
console.log(pers3.walk());

console.log(pers1.read());
console.log(pers2.read());
console.log(pers3.read());

console.log(pers1.write());
console.log(pers2.write());
console.log(pers3.write());