// Name: Brian Feng
// Mod Title: Rocket Petroleum - It's Gas
// Please refer to this link to understand the joke: https://www.urbandictionary.com/define.php?term=Gas
// Time: 9 hours
// ------------
// Mods:
// Add time to clock for successful hits - 5 pts
// Mouse movement and firing - 5 pts
// Explosion particles - 5 pts
// Timer - 3 pts
// Randomize movement - 1 pt
// Fire UI - 1 pt
// TOTAL: 20 pts

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    disableContextMenu: true
}

let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let keyF, keyR, keyLEFT, keyRIGHT