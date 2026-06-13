// Draw/erase a single living cell
function cellDraw (x: number, y: number) {
    spriteCursor.setPosition(x, y)
    if (spriteCursor.tileKindAt(TileDirection.Center, assets.tile`tileNoCell`) || spriteCursor.tileKindAt(TileDirection.Center, assets.tile`tileCell`)) {
        if (browserEvents.MouseLeft.isPressed()) {
            tiles.setTileAt(spriteCursor.tilemapLocation(), assets.tile`tileCell`)
        }
        if (browserEvents.MouseRight.isPressed()) {
            tiles.setTileAt(spriteCursor.tilemapLocation(), assets.tile`tileNoCell`)
        }
    }
}
// Draw/erase as the mouse moves
browserEvents.onMouseMove(function (x, y) {
    cellDraw(x, y)
})
// Draw on left mouse clicks
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    cellDraw(x, y)
})
// Draw on left mouse clicks
browserEvents.MouseRight.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    cellDraw(x, y)
})
let spriteCursor: Sprite = null
namespace userconfig {
    // Standard size is 160x120. Double it to zoom out by 2x! I'm zoomed out by 12
    export const ARCADE_SCREEN_WIDTH = 1920
    export const ARCADE_SCREEN_HEIGHT = 1440
}
scene.setBackgroundColor(1)
// Tilemap "levelGood" is 120 x 90 tiles
tiles.setCurrentTilemap(tilemap`levelGood`)
spriteCursor = sprites.create(assets.image`spriteCursor`, SpriteKind.Player)
controller.moveSprite(spriteCursor, 100, 100)
let spriteButtonPlay = sprites.create(assets.image`spriteButtonPlay`, SpriteKind.Player)
spriteButtonPlay.setPosition(50, 39)
