kaboom()

// SPRITES
loadSprite('toto', 'img/main.png')
loadSprite('coin', 'img/coin.png')
// loadSprite('enemy', 'img/enemy.png')
loadSprite('grass', 'img/grass.png')
loadSprite('stone', 'img/stone.png')
loadSprite('door', 'img/door.png')

// LEVELS

const LEVELS =
    [
        '                          ',
        '                          ',
        '                          ',
        '                          ',
        '                          ',
        '     $$$                  ',
        '                          ',
    ]


// DEFINING SPRITES

const levelConf = {
    width: 64,
    height: 64,

    '=': () => [
        sprite('grass'),
        area(),
        solid(),
        origin('bot'),
    ],
    '$': () => [
        sprite('coin'),
        area(),
        solid(),
        origin('bot'),
    ],

}
