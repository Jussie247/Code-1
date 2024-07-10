"use strict";
let currentGameMode = "Standard";
document.getElementById("start-game").addEventListener("click", startGame);
const audioCtx = new AudioContext();
let keys = [];
let playerSong = "";
let playerTurn = false;
let keysPlayed = 0;
let song = "11556654433221";
function startGame() {
    // Get the selected game mode
    const gameModeSelect = document.getElementById("game-mode");
    currentGameMode = gameModeSelect.value;
    // Clear the body
    document.body.innerHTML = "";
    // Create and append the canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 1200;
    canvas.height = 600;
    canvas.style.border = "1px solid black";
    document.body.appendChild(canvas);
    if (currentGameMode === "Standard") {
        const button = document.createElement('button');
        button.id = "Simon";
        button.textContent = 'Play next note';
        button.style.background = "blue";
        button.style.color = "white";
        document.body.appendChild(button);
        button.addEventListener('click', () => {
            simonSays(song);
            console.log('Button clicked');
        });
        //Explanation paragraph
        const explanation = document.createElement("p");
        explanation.textContent = "Press the button to play the next sound. Replay every sound you heard in order.";
        explanation.style.marginTop = "10px";
        explanation.style.fontWeight = "bold";
        explanation.style.maxWidth = "300px";
        explanation.style.textAlign = "center";
        document.body.appendChild(explanation);
        //Strike counter
        let counter = document.createElement("span");
        counter.textContent = "Strikes: 0";
        document.body.appendChild(counter);
        counter.style.textAlign = "center";
        songSelector();
    }
    // Initialize the xylophone game
    initXylophoneGame();
}
function initXylophoneGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let restartButton = document.createElement("button");
    restartButton.textContent = "Back to Menu";
    restartButton.addEventListener("click", restart);
    document.body.appendChild(restartButton);
    const keyCount = 8;
    let pitches = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let sounds = ["Sounds/xylophone-c3.wav", "Sounds/xylophone-d3.wav", "Sounds/xylophone-e3.wav", "Sounds/xylophone-f3.wav",
        "Sounds/xylophone-g3.wav", "Sounds/xylophone-a.wav", "Sounds/xylophone-b-h.wav", "Sounds/xylophone-c2_kleines_C.wav"];
    let colors = ["#ea4029", "#2020b8", "#f3f646", "#42f4e9", "#53ed41", "#b53af3", "#f0af37", "#f360c0"];
    canvas.addEventListener("click", handleClick);
    createBoard();
    function createBoard() {
        let rods = new Path2D;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        rods.moveTo(120, 200);
        rods.lineTo(canvas.width - 150, 200);
        rods.moveTo(120, canvas.height - 200);
        rods.lineTo(canvas.width - 150, canvas.height - 200);
        ctx.stroke(rods);
        for (let i = 0; i < keyCount; i++) {
            let y = 20 + 20 * i;
            let x = 150 + 110 * i;
            let l = 560 - 40 * i;
            let newKey = {
                sound: sounds[i],
                pitch: pitches[i],
                width: 100,
                length: l,
                color: colors[i],
                posX: x,
                posY: y,
                path: new Path2D,
            };
            keys.push(newKey);
            drawKey(newKey, ctx);
        }
    }
    let tempSong = "";
    function handleClick(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        if (currentGameMode === "Standard") {
            if (playerTurn == true) {
                if (keysPlayed < songProgress) {
                    for (let i = 0; i < keys.length; i++) {
                        let keyCheck = keys[i];
                        if (ctx.isPointInPath(keyCheck.path, x, y)) {
                            tempSong = playerSong + keyCheck.pitch;
                            playKey(keyCheck);
                            keysPlayed += 1;
                            if (checkPlayerSong(song, tempSong) == false) {
                                console.log("You made a mistake");
                                wrongKey();
                                keysPlayed = keysPlayed - 1;
                            }
                            else {
                                playerSong = tempSong;
                            }
                            if (keysPlayed >= songProgress) {
                                playerTurn = false;
                            }
                            console.log("Keys played: " + keysPlayed);
                            if (playerSong.length == song.length) {
                                victory();
                            }
                        }
                    }
                }
            }
        }
        else if (currentGameMode === "Freemode") {
            for (let i = 0; i < keys.length; i++) {
                let keyCheck = keys[i];
                if (ctx.isPointInPath(keyCheck.path, x, y)) {
                    playKey(keyCheck);
                }
            }
        }
    }
}
function drawKey(_key, _ctx) {
    let x = _key.posX;
    let y = _key.posY;
    let keyPath = _key.path;
    _ctx.fillStyle = _key.color;
    _ctx.lineWidth = 1;
    keyPath.moveTo(x, y);
    keyPath.rect(x, y, _key.width, _key.length);
    _ctx.fill(keyPath);
    _ctx.stroke(keyPath);
}
function playKey(_key) {
    let sound = new Audio(_key.sound);
    sound.play();
    glowKey(_key);
}
function glowKey(_key) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const originalColor = _key.color;
    ctx.fillStyle = lightenColor(originalColor, 50);
    ctx.fill(_key.path);
    setTimeout(() => {
        ctx.fillStyle = originalColor;
        ctx.fill(_key.path);
        ctx.strokeStyle = "black";
        ctx.stroke(_key.path);
    }, 300);
}
function lightenColor(color, amount) {
    const hex = color.replace('#', '');
    const rgb = parseInt(hex, 16);
    const r = Math.min(255, ((rgb >> 16) & 0xff) + amount);
    const g = Math.min(255, ((rgb >> 8) & 0xff) + amount);
    const b = Math.min(255, (rgb & 0xff) + amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
let songProgress = 0;
function simonSays(_song) {
    if (currentGameMode !== "Standard")
        return;
    if (playerTurn == false) {
        let note = _song[songProgress];
        for (let b = 0; b < keys.length; b++) {
            if (note == keys[b].pitch) {
                console.log(note);
                playKey(keys[b]);
                songProgress += 1;
                playerTurn = true;
                playerSong = "";
                keysPlayed = 0;
                console.log(songProgress);
            }
        }
    }
}
function checkPlayerSong(_song, _player) {
    let playerCorrect = true;
    let songPart = _song.substring(0, keysPlayed);
    if (songPart !== _player) {
        playerCorrect = false;
    }
    return playerCorrect;
}
let strikeCount = 0;
function wrongKey() {
    strikeCount += 1;
    let strikes = document.getElementsByTagName("span")[0];
    strikes.textContent = "Strikes: " + String(strikeCount);
    if (strikeCount >= 3) {
        gameOver();
    }
}
function gameOver() {
    document.body.innerHTML = "";
    let gameOver = document.createElement("h1");
    gameOver.textContent = "Game Over";
    document.body.appendChild(gameOver);
    let p = document.createElement("p");
    p.textContent = "You played too many wrong notes. Skill Issue.";
    document.body.appendChild(p);
    let retryButton = document.createElement("button");
    retryButton.textContent = "Try Again";
    retryButton.addEventListener("click", restart);
    document.body.appendChild(retryButton);
}
function victory() {
    document.body.innerHTML = "";
    let victory = document.createElement("h1");
    victory.textContent = "You`re Winner!";
    document.body.appendChild(victory);
    let p = document.createElement("p");
    p.textContent = "You played the correct notes. Congratulations!";
    document.body.appendChild(p);
    let restartButton = document.createElement("button");
    restartButton.textContent = "Back to menu";
    restartButton.addEventListener("click", restart);
    document.body.appendChild(restartButton);
}
function restart(_event) {
    location.reload();
}
function songSelector() {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.left = "10px";
    buttonContainer.style.top = "10px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "column";
    buttonContainer.style.gap = "10px";
    let songButton = document.createElement("button");
    songButton.textContent = "Twinkle Twinkle Little Star";
    songButton.id = "11556654433221";
    songButton.className = "songSelect";
    songButton.addEventListener("click", selectSong);
    buttonContainer.appendChild(songButton);
    let songButton2 = document.createElement("button");
    songButton2.textContent = "Ode to Joy";
    songButton2.id = "334554321123322";
    songButton2.className = "songSelect";
    songButton2.addEventListener("click", selectSong);
    buttonContainer.appendChild(songButton2);
    let songButton3 = document.createElement("button");
    songButton3.textContent = "Mary had a little Lamp";
    songButton3.id = "321233322233355321233322232";
    songButton3.className = "songSelect";
    songButton3.addEventListener("click", selectSong);
    buttonContainer.appendChild(songButton3);
    let songButton4 = document.createElement("button");
    songButton4.textContent = "Let It Be";
    songButton4.id = "3213566653213334332321";
    songButton4.className = "songSelect";
    songButton4.addEventListener("click", selectSong);
    buttonContainer.appendChild(songButton4);
    let songButton5 = document.createElement("button");
    songButton5.textContent = "Funky Town (Riff)";
    songButton5.id = "5545225875";
    songButton5.className = "songSelect";
    songButton5.addEventListener("click", selectSong);
    buttonContainer.appendChild(songButton5);
    document.body.appendChild(buttonContainer);
}
function selectSong(_event) {
    song = _event.target.id;
    playerSong = "";
    keysPlayed = 0;
    songProgress = 0;
    strikeCount = 0;
    let counter = document.getElementsByTagName("span")[0];
    counter.textContent = "Strikes: 0";
    playerTurn = false;
}
