# Snake Game

A retro Snake game in vanilla JavaScript and HTML Canvas, with a minimal terminal look. It runs on its own in the browser, and it also plugs into my [ZIX-OS terminal](https://github.com/kw20d/command-line-os) as a module.

**Play it:** [kw20d.github.io/snake-game](https://kw20d.github.io/snake-game/)

## Controls

| Key | Action |
|---|---|
| Arrow keys | Move |
| Shift (hold) | Dash |
| R | Restart after game over |
| Esc | Stop the game (in ZIX-OS it returns you to the terminal) |

## How it works
- The game runs on a fixed tick: it moves, checks collisions, and redraws every 150ms, or every 60ms while dashing.
- The snake is a list of grid cells. Each tick adds a new head and drops the tail, unless it just ate.
- Walls wrap around, hitting your own body ends the game, and food never spawns on the snake.

## Use it as a module
`snake.js` exports an object with three functions, so any page can run it:

- `start(canvas)` starts a new game on that canvas
- `onKey(eventType, key)` takes every `keydown` and `keyup`
- `stop()` ends it and clears the timer

`main.js` is the standalone wrapper. It sizes the canvas, loads the font, and forwards the keys. ZIX-OS does the same thing from its own handler.

## Run it locally
It uses JavaScript modules, so open it through a local server:

```bash
git clone https://github.com/kw20d/snake-game.git
cd snake-game
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files
```text
snake-game/
├── index.html   page
├── style.css    layout and font
├── main.js      standalone wrapper (canvas, font, keys)
├── snake.js     the game module
└── icon.png
```

## Credits
Font: VT323 (SIL Open Font License).