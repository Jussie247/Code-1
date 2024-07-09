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
    }
    // Initialize the xylophone game
    initXylophoneGame();
}
function initXylophoneGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const keyCount = 8;
    let pitches = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let sounds = ["Sounds/xylophone-c3.wav", "Sounds/xylophone-d3.wav", "Sounds/xylophone-e3.wav", "Sounds/xylophone-f3.wav",
        "Sounds/xylophone-g3.wav", "Sounds/xylophone-a.wav", "Sounds/xylophone-b-h.wav", "Sounds/xylophone-c2_kleines_C.wav"];
    let colors = ["#ea4029", "#2020b8", "#f3f646", "#42f4e9", "#53ed41", "#b53af3", "#f0af37", "#f360c0"];
    const audioCtx = new AudioContext();
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
            drawKey(newKey);
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
        if (currentGameMode === "Standard") {
            if (playerTurn == true) {
                if (keysPlayed < songProgress) {
                    for (let i = 0; i < keys.length; i++) {
                        let keyCheck = keys[i];
                        let sound = new Audio(keyCheck.sound);
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
        else if (currentGameMode === "Freemode") {
            for (let i = 0; i < keys.length; i++) {
                let keyCheck = keys[i];
                let sound = new Audio(keyCheck.sound);
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
                let sound = new Audio(keys[b].sound);
                audioCtx.resume();
                sound.play();
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
