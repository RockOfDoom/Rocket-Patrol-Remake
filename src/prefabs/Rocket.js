class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.sfxRocket = scene.sound.add('sfx_rocket');
        this.movementSpeed = 2;
        // this.launchSpeed = this.movementSpeed;
        // this.launchAccel = 1.035;
        this.firing = false;
    }

    update() {
        if(this.firing) {
            this.y -= this.movementSpeed;
            // this.y -= this.launchSpeed;
            // this.launchSpeed *= this.launchAccel;
            if(this.y <= borderUISize * 3 + borderPadding) {
                this.reset();
            }
        } else {
            if(keyLEFT.isDown) {
                this.x -= this.movementSpeed;
            }
            if(keyRIGHT.isDown) {
                this.x += this.movementSpeed;
            }

            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.firing = true;
                this.sfxRocket.play();
            }

            this.x = Phaser.Math.Clamp(this.x, 
                borderUISize + borderPadding, 
                game.config.width - borderUISize - borderPadding);
        }
    }

    reset() {
        this.y =  game.config.height - borderUISize - borderPadding;
        this.firing = false;
        // this.launchSpeed = this.movementSpeed;
    }
}