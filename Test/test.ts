let currentGameMode: string = "Standard";

document.getElementById("start-game")!.addEventListener("click", startGame);
const audioCtx = new AudioContext();

//global variables
let keys: XyloKey[] = [];
let playerSong: string = "";
let playerTurn: boolean = false;
let keysPlayed: number = 0;
let song: string = "11556654433221";
let songProgress: number = 0;
let strikeCount: number = 0;

interface XyloKey {
    sound: string,
    pitch: string,
    width: number,
    length: number,
    color: string,
    posX: number,
    posY: number,
    path: Path2D,
}

function startGame() {
    // Get the selected game mode
    const gameModeSelect = document.getElementById("game-mode") as HTMLSelectElement;
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
        let counter: HTMLElement = document.createElement("span");
        counter.textContent = "Strikes: 0";
        document.body.appendChild(counter);
        counter.style.textAlign = "center";

        songSelector();
    }

   // Initialize the xylophone game
   initXylophoneGame();
}

function initXylophoneGame() { //builds framework for the game
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    let restartButton = document.createElement("button");
    restartButton.textContent = "Back to Menu";
    restartButton.addEventListener("click", restart);
    document.body.appendChild(restartButton);

    const keyCount = 8;
    let pitches: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let sounds: string[] = ["Sounds/xylophone-c3.wav", "Sounds/xylophone-d3.wav", "Sounds/xylophone-e3.wav", "Sounds/xylophone-f3.wav",
        "Sounds/xylophone-g3.wav", "Sounds/xylophone-a.wav", "Sounds/xylophone-b-h.wav", "Sounds/xylophone-c2_kleines_C.wav"];
    let colors: string[] = ["#ea4029", "#2020b8", "#f3f646", "#42f4e9", "#53ed41", "#b53af3", "#f0af37", "#f360c0"];

    canvas.addEventListener("click", handleClick);
    createBoard();

    function createBoard() {
        //draw the xylophone
        let rods: Path2D = new Path2D;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;

        rods.moveTo(120, 200);
        rods.lineTo(canvas.width - 150, 200);
        rods.moveTo(120, canvas.height - 200);
        rods.lineTo(canvas.width - 150, canvas.height - 200);

        ctx.stroke(rods);

        //generate xylophone keys
        for (let i: number = 0; i < keyCount; i++) {
            let y: number = 20 + 20 * i;
            let x: number = 150 + 110 * i;
            let l: number = 560 - 40 * i;

            let newKey: XyloKey = {
                sound: sounds[i],
                pitch: pitches[i],
                width: 100,
                length: l,
                color: colors[i],
                posX: x,
                posY: y,
                path: new Path2D,
            }

            keys.push(newKey);
            drawKey(newKey, ctx);
        }
    }

    
    function handleClick(_event: MouseEvent) {
        let tempSong: string = "";
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        //in standard mode, checks if played note is correct and adds it to the total played notes
        if (currentGameMode === "Standard") {
            if (playerTurn == true) {
                if (keysPlayed < songProgress) {
                    for (let i: number = 0; i < keys.length; i++) {
                        let keyCheck: XyloKey = keys[i];

                        if (ctx.isPointInPath(keyCheck.path, x, y)) {
                            tempSong = playerSong + keyCheck.pitch;
                            playKey(keyCheck);

                            keysPlayed += 1;
                            
                            if (checkPlayerSong(song, tempSong) == false) { 
                                console.log("You made a mistake");
                                wrongKey();
                                keysPlayed = keysPlayed - 1;
                            }
                            else {playerSong = tempSong;} //played note is only added if correct
                            
                            if (keysPlayed >= songProgress) { //checks if its time for the computer to play
                                playerTurn = false;
                            }

                            //console.log("Keys played: " + keysPlayed);
                            if (playerSong.length == song.length) {
                                victory();
                            }
                        }
                    }
                }
            }
        }
        else if (currentGameMode === "Freemode") { //in free mode, key is played normally
            for (let i: number = 0; i < keys.length; i++) {
                let keyCheck: XyloKey = keys[i];

                if (ctx.isPointInPath(keyCheck.path, x, y)) {
                    playKey(keyCheck);
                }
            }
        }
    }
}

function drawKey(_key: XyloKey, _ctx: CanvasRenderingContext2D) { 
    //draws the current key
    let x: number = _key.posX;
    let y: number = _key.posY;
    let keyPath: Path2D = _key.path;

    _ctx.fillStyle = _key.color;
    _ctx.lineWidth = 1;

    keyPath.moveTo(x, y);
    keyPath.rect(x, y, _key.width, _key.length);
    _ctx.fill(keyPath);
    _ctx.stroke(keyPath);
}

function playKey(_key: XyloKey): void {
    //current key is played
    let sound = new Audio(_key.sound);
    sound.play();
    glowKey(_key);
}

function glowKey(_key: XyloKey): void {
    //played key glows
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
    
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

function lightenColor(color: string, amount: number): string {
    //calculates color for glow effect
    const hex = color.replace('#', '');
    const rgb = parseInt(hex, 16);
    const r = Math.min(255, ((rgb >> 16) & 0xff) + amount);
    const g = Math.min(255, ((rgb >> 8) & 0xff) + amount);
    const b = Math.min(255, (rgb & 0xff) + amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function simonSays(_song: string) { //computer plays selected song note for note and waits for the player 
    if (currentGameMode !== "Standard") return;

    if (playerTurn == false) {
        let note: string = _song[songProgress];
        for (let b: number = 0; b < keys.length; b++) {
            if (note == keys[b].pitch) {
                console.log(note);
                playKey(keys[b]);
                songProgress += 1;
                playerTurn = true;
                playerSong = "";
                keysPlayed = 0;
            }
        }
    }
}

function checkPlayerSong(_song: string, _player: string): boolean {
    //checks if the player played the correct note
    let playerCorrect: boolean = true;
    let songPart: string = _song.substring(0, keysPlayed);
    if (songPart !== _player) {
        playerCorrect = false;
    }

    return playerCorrect
}


function wrongKey(): void {
    //adds to the strike counter and checks for game over
    strikeCount += 1;
    let strikes: HTMLElement = document.getElementsByTagName("span")[0];
    strikes.textContent = "Strikes: " + String(strikeCount);
    if (strikeCount >= 3){
        gameOver();
    }
}

function gameOver():void {
    //game over screen
    document.body.innerHTML = "";

    let gameOver: HTMLElement = document.createElement("h1")!;
    gameOver.textContent = "Game Over";
    document.body.appendChild(gameOver);

    let p: HTMLElement = document.createElement("p");
    p.textContent = "You played too many wrong notes. Skill Issue.";
    document.body.appendChild(p);

    let retryButton = document.createElement("button");
    retryButton.textContent = "Try Again";
    retryButton.addEventListener("click", restart);
    document.body.appendChild(retryButton);
}

function victory(): void {
    //victory screen
    document.body.innerHTML = "";

    let victory: HTMLElement = document.createElement("h1")!;
    victory.textContent = "You`re A Winner!";
    document.body.appendChild(victory);

    let p: HTMLElement = document.createElement("p");
    p.textContent = "You played the correct notes. Congratulations!";
    document.body.appendChild(p);

    let restartButton = document.createElement("button");
    restartButton.textContent = "Back to menu";
    restartButton.addEventListener("click", restart);
    document.body.appendChild(restartButton);
}

function restart(_event: MouseEvent):void { //reloads page
    location.reload();
}

function songSelector(): void { //builds the song select buttons next to xylophone
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.left = `${canvas.offsetLeft - 270}px`; 
    buttonContainer.style.top = `${canvas.offsetTop}px`;
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "column";
    buttonContainer.style.gap = "10px";


    //generate song select buttons
    let songs: string[] = ["11556654433221", "334554321123322", "321233322233355321233322232", "3213566653213334332321", "5545225875" ]
    let songNames: string[] = ["Twinkle Twinkle Little Star", "Ode to Joy", "Mary had a little Lamb", "Let It Be", "Funky Town (Riff)" ]
    
    for (let i: number = 0; i < songs.length; i++) {
        let songButton = document.createElement("button");
        songButton.textContent = songNames[i];
        songButton.id = songs[i];
        songButton.className = "songSelect";
        songButton.addEventListener("click", selectSong);
        buttonContainer.appendChild(songButton);
    }
    

    document.body.appendChild(buttonContainer);

}

function selectSong(_event: MouseEvent) { //when new song is selected, load it and reset important variables
    song = (_event.target as Element).id;
    playerSong = "";
    keysPlayed = 0;
    songProgress = 0;
    strikeCount = 0;
    let counter: HTMLElement = document.getElementsByTagName("span")[0];
    counter.textContent = "Strikes: 0";
    playerTurn = false;
}

