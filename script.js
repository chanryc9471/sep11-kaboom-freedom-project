kaboom()

//SPRITES
loadSprite('toto', 'img/toto.png')
loadSprite('coin', 'img/coin.png')
loadSprite('enemy', 'img/enemy.png')
loadSprite('grass', 'img/grass.png')
loadSprite('stone', 'img/stone.png')
loadSprite('door', 'img/door.png')

// LEVELS
const SPEED = 480
const LEVELS =[

        '                          ',
        '                          ',
        '                          ',
        '                          ',
        '      $$$      $$   ===   ',
        '      ===    =====        ',
        '====      ========  ===   ',
    ]


scene('game', ({ levelIdx, score}) => {
    // DEFINGING SPRITES
    gravity(2400)

    const level = addLevel(LEVELS[levelIdx || 0], {
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

    })

})
