# Price Is Right Scoreboard

A colorful scoreboard inspired by The Price Is Right.

## How to Run (Simple Version)

1. Install Node.js (https://nodejs.org)
2. Open a terminal/command prompt in this folder.
3. Run:
   npm install
   node server.js
4. Open a browser to http://localhost:3000 to view the scoreboard.
5. Open http://localhost:3000/control.html to control scores.

## Building Executables

To create Windows/Linux executables:
   npm install -g pkg
   pkg server.js --targets node18-win-x64,node18-linux-x64

This will generate:
   PriceIsRightScoreboard.exe (Windows)
   PriceIsRightScoreboard (Linux)
