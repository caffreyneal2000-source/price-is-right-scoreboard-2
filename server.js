const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Fix: serve index.html when visiting root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('updateScore', (data) => {
    io.emit('scoreUpdated', data);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Price Is Right Scoreboard running at http://localhost:${PORT}`);
});
