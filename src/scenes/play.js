

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image("starfield", 'assets/starfield.png');
    }

    create() {
        //display starfield
        this.starfield = this.add.tileSprite(0, 
            0, 
            640, 
            480, 
            "starfield").setOrigin(0,0);

        //green UI background
        this.add.rectangle(0, 
            borderUISize + borderPadding, 
            game.config.width, 
            borderUISize * 2,
            0x00FF00).setOrigin(0,0);
        
        //white borders
        // this.add.rectangle(0, 0, game.config.width)
    }

    update() {
        this.starfield.tilePositionX -= 4;
    }
}

