var server = require("net").createServer();
var io = require("socket.io")(server);


io.on("connection", socket => {
  socket.emit('message', { text: 'this is the text' });
});

io.on("message", function(tweet) {
    console.log("contents:", tweet.text);
});
