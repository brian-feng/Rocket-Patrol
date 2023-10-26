class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)

        this.isFiring = false;
        this.moveSpeed = 2;

        this.sfxRocket = scene.sound.add('sfx_rocket')
    }

    update() {
        if(!this.isFiring){
            /*if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed
            }
            else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed
            }*/

            this.x = this.scene.input.mousePointer.x
        }
        

        /*if(Phaser.Input.Pointer.leftButtonDown()){
            this.isFiring = true
            this.sfxRocket.play()
        }*/

        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed
        }

        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset()
        }
    }

    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
        this.scene.fireText.alpha = 0
    }

    fire() {
        this.isFiring = true
        this.scene.fireText.alpha = 1
        this.sfxRocket.play()
    }
}