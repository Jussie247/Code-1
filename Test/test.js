"use strict";
let currentGameMode = "Standard";
document.getElementById("start-game").addEventListener("click", startGame);
const audioCtx = new AudioContext();
let keys = [];
let playerSong = "";
let playerTurn = false;
let keysPlayed = 0;
let song = "12345678";
function startGame() {
    // Get the selected game mode
    const gameModeSelect = document.getElementById("game-mode"); //gets gamemode
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
        // Initialize the xylophone game
        initXylophoneGame();
    }
}
function initXylophoneGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
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
    function handleClick(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        if (currentGameMode === "Standard") { //StandardMode: Simon Says
            if (playerTurn == true) {
                if (keysPlayed < songProgress) {
                    for (let i = 0; i < keys.length; i++) {
                        let keyCheck = keys[i];
                        let sound = new Audio(keyCheck.sound);
                        if (ctx.isPointInPath(keyCheck.path, x, y)) {
                            playerSong = playerSong + keyCheck.pitch;
                            playKey(keyCheck);
                            if (checkPlayerSong(song, playerSong) == false) {
                                console.log("You made a mistake");
                                wrongKey();
                            }
                            else {
                                keysPlayed += 1;
                            }
                            if (keysPlayed >= songProgress) {
                                playerTurn = false;
                            }
                            console.log("Keys played: " + keysPlayed);
                        }
                    }
                }
            }
        }
        else if (currentGameMode === "Freemode") { //FreeMode: Player can play freely
            for (let i = 0; i < keys.length; i++) {
                let keyCheck = keys[i];
                if (ctx.isPointInPath(keyCheck.path, x, y)) {
                    playKey(keyCheck);
                }
                ;
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
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.stroke(_key.path);
    audioCtx.resume().then(() => {
        sound.play();
    });
    //
    drawKey(_key, ctx);
}
let songProgress = 0;
//SimonSaysMode, Computer plays current note and waits for the player to play all previous notes plus the current one
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
//checks if the notes player by player are correct
function checkPlayerSong(_song, _player) {
    let playerCorrect = true;
    let songPart = _song.substring(0, keysPlayed);
    if (songPart !== _player) {
        playerCorrect = false;
    }
    console.log(_player);
    console.log(songPart);
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
function restart(_event) {
    location.reload();
}
function victory() {
    document.body.innerHTML = "";
    let victory = document.createElement("h1");
    victory.textContent = "You`re Winner!";
    document.body.appendChild(victory);
    let p = document.createElement("p");
    p.textContent = "You played the correct notes";
    document.body.appendChild(p);
    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restart);
    document.body.appendChild(restartButton);
}
