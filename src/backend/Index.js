var app = require('express')();
var http = require('http').createServer(app);
const axios = require('axios').default;
const PORT = 3000;
var io = require('socket.io')(http);
// const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

io.on('connection', socket => {
  console.log('new user connected ', socket.id);
  socket.on('receive', data => {
    console.log('data::', data);
    socket.broadcast.emit('getMessages');
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
