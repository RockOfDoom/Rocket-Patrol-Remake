class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to current scene
        this.points = pointValue; //retrieve the score players will get for hitting ship
        this.movementSpeed = game.settings.spaceshipSpeed; //retrieve the speed at which the ship flies
    }

    update() {
        this.x -= this.movementSpeed;
        //if the end of the screen is reached, wrap around
        if(this.x < -this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}