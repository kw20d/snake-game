# Snake Game

A retro-inspired Snake game built with **vanilla JavaScript** and **HTML Canvas**.

Designed with a minimal terminal aesthetic, the game runs independently in the browser and can also be integrated into a larger terminal-based environment through a reusable game module.

## Features

- Classic Snake gameplay
- Canvas-based rendering
- Keyboard controls
- Screen-edge wraparound
- Collision detection and game-over state
- Food spawning and score tracking
- Dash mechanic
- Restart functionality

## Controls

| Key | Action |
|---|---|
| Arrow Keys | Move |
| Shift | Dash |
| R | Restart after game over |
| Esc | Exit (when integrated into the terminal) |

## Getting Started

Clone the repository:

```bash
git clone https://github.com/kw20d/snake-game.git
cd snake-game
```

Start a local development server:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Project Structure

```text
snake-game/
├── index.html
├── style.css
├── main.js
├── snake.js
└── icon.png
```

## Built With

- HTML5
- CSS3
- JavaScript
- HTML Canvas API

## License

This project is open source under the MIT License.