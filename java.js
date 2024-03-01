const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const box = 20;
let snake = [{ x: 10 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let direction = 'right';
let gameOver = false;
let gameInterval;
let initialSpeed = 200; // Startgeschwindigkeit in Millisekunden
let speedFactor = 0.9; // Faktor, um die Geschwindigkeit zu erhöhen

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('reloadButton').addEventListener('click', reloadPage);

function startGame() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';
    canvas.style.display = 'block';
    gameInterval = setInterval(draw, initialSpeed); // Startgeschwindigkeit
}

function reloadPage() {
    location.reload();
}

function draw() {
    if (gameOver) {
        clearInterval(gameInterval);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, box, box);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    moveSnake();

    if (snake[0].x === food.x && snake[0].y === food.y) {
        eatFood();
        increaseSpeed(); // Beschleunige die Schlange, wenn sie Essen frisst
    }
}

function moveSnake() {
    let head = { x: snake[0].x, y: snake[0].y };

    if (direction === 'right') head.x += box;
    if (direction === 'left') head.x -= box;
    if (direction === 'down') head.y += box;
    if (direction === 'up') head.y -= box;

    if (head.x >= canvas.width || head.x < 0 || head.y >= canvas.height || head.y < 0) {
        gameOver = true;
        return;
    }

    snake.unshift(head);

    if (!ateFood) {
        snake.pop();
    } else {
        ateFood = false;
    }
}

function eatFood() {
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    ateFood = true;
}

let ateFood = false;

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
});

function increaseSpeed() {
    clearInterval(gameInterval); // Zuerst das aktuelle Intervall löschen
    initialSpeed *= speedFactor; // Geschwindigkeit erhöhen
    gameInterval = setInterval(draw, initialSpeed); // Neues Intervall setzen
}
