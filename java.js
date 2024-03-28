// JavaScript-Code in java.js

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const box = 30;
let snake = [{ x: 10 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let direction = 'right';
let gameOver = false;
let gameInterval;
let speed = 150;
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;

const foodImgs = [
    'pictures/redbull.jpg',
    'pictures/cola.jpg',
    'pictures/gipfeli.jpg',
    'pictures/chips.png',
];

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('reloadButton').addEventListener('click', reloadGame);

function startGame() {
    document.getElementById('startPage').style.display = 'none';
    canvas.style.display = 'block';
    document.getElementById('reloadButton').style.display = 'block';
    document.getElementById('scoreContainer').style.display = 'block';
    playGameMusic(); // Start playing the game music
    gameInterval = setInterval(draw, speed);
}

function reloadGame() {
    gameOver = false;
    snake = [{ x: 10 * box, y: 10 * box }];
    direction = 'right';
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    speed = 150;
    score = 0;
    clearInterval(gameInterval);
    gameInterval = setInterval(draw, speed);
}

function draw() {
    if (gameOver) {
        clearInterval(gameInterval);
        pauseGameMusic(); // Pause the game music when the game ends
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw score
    ctx.fillStyle = '#171717';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
    ctx.fillText('Highscore: ' + highscore, 10, 50);

    // Draw snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            const snakeHeadImg = new Image();
            snakeHeadImg.src = 'pictures/lara.jpg';
            ctx.drawImage(snakeHeadImg, segment.x, segment.y, box, box);
        } else {
            let color = '#95c11f';
            ctx.fillStyle = color;
            ctx.fillRect(segment.x, segment.y, box, box);
        }
    });

    // Draw food
    const randomFoodIndex = Math.floor(Math.random() * foodImgs.length);
    const randomFoodImg = new Image();
    randomFoodImg.src = foodImgs[randomFoodIndex];
    ctx.drawImage(randomFoodImg, food.x, food.y, box, box);

    moveSnake();

    if (snake[0].x === food.x && snake[0].y === food.y) {
        eatFood();
    }
}

function moveSnake() {
    let head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'right':
            head.x += box;
            break;
        case 'left':
            head.x -= box;
            break;
        case 'down':
            head.y += box;
            break;
        case 'up':
            head.y -= box;
            break;
    }

    if (head.x >= canvas.width || head.x < 0 || head.y >= canvas.height || head.y < 0) {
        gameOver = true;
        updateHighscore();
        return;
    }

    snake.unshift(head);

    const snakeCollision = snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    if (snakeCollision) {
        gameOver = true;
        updateHighscore();
        return;
    }

    if (head.x !== food.x || head.y !== food.y) {
        snake.pop();
    }
}

function eatFood() {
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    score++;
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
}

function updateHighscore() {
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
    }
});

// Funktionen playGameMusic und pauseGameMusic müssen noch definiert werden
function playGameMusic() {
    // Code zum Abspielen der Spiel-Musik
}

function pauseGameMusic() {
    // Code zum Pausieren der Spiel-Musik
}
