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
        songSelector();
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
    function drawKey(_key) {
        let x = _key.posX;
        let y = _key.posY;
        let keyPath = _key.path;
        ctx.fillStyle = _key.color;
        ctx.lineWidth = 1;
        keyPath.moveTo(x, y);
        keyPath.rect(x, y, _key.width, _key.length);
        ctx.fill(keyPath);
        ctx.stroke(keyPath);
    }
    function handleClick(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        if (currentGameMode === "Standard") { //StandardMode: Simon Says
            if (playerTurn == true) {
                if (keysPlayed < songProgress) {
                    for (let i = 0; i < keys.length; i++) {
                        let keyCheck = keys[i];
                        if (ctx.isPointInPath(keyCheck.path, x, y)) {
                            playerSong = playerSong + keyCheck.pitch;
                            console.log(keyCheck.pitch);
                            audioCtx.resume().then(() => {
                                sound.play();
                            });
                            keysPlayed += 1;
                            console.log("Keys played: " + keysPlayed);
                            if (checkPlayerSong(song, playerSong) == false) {
                                console.log("You made a mistake");
                            }
                            if (keysPlayed >= songProgress) {
                                playerTurn = false;
                            }
                        }
                    }
                }
            }
        }
        else if (currentGameMode === "Freemode") { //FreeMode: Player can play freely
            for (let i = 0; i < keys.length; i++) {
                let keyCheck = keys[i];
                if (ctx.isPointInPath(keyCheck.path, x, y)) {
                    console.log(keyCheck.pitch);
                    audioCtx.resume().then(() => {
                        sound.play();
                    });
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
let strikeCount = 0;
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
