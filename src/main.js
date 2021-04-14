//list of mods:
//  Rocket accelerates exponentially after being fired for juice reasons (in Rocket.js)
//  Game updates 60 times per second regardless of FPS (in Play.js)
//  Score display updates incrementally (1pt per frame) rather than all at once for juice
// 

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyF, keyR;