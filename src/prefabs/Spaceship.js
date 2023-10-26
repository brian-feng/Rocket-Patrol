class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.spaceshipSpeed
        this.dir = 0
        if(Math.random() < 0.5){
            this.dir = 1
            this.x = 0
            this.flipX = true
        }
    }

    update() {
        if(this.dir == 0){
            this.x -= this.moveSpeed
            if(this.x <= 0 - this.width) {
                this.reset()
            }
        }
        else{
            this.x += this.moveSpeed
            if(this.x > game.config.width){
                this.reset()
            }
        }
    }

    reset() {
        if(this.dir == 0){
            this.x = game.config.width
        }
        else{
            this.x = 0
        }
    }
}