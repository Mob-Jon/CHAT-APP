const path = require('path');
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("io")(http);
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

let users = {}
io.on('connection', (socket) => {
    console.log('a user connected');
    let userId = 
    socket.on('message-send', message => {
        // console.log('message:' + message);
        // io.emit('chat message', msg);
        socket.broadcast.emit('sendToAll', message);
    });
    socket.on('typing', res => {
        if (res.typing == true) {
            socket.broadcast.emit('display_typing', res);
        }
        else {
            socket.broadcast.emit('display_typing', res);
        }
    })
    socket.on('disconnection', () => {

    })
    // socket.on('chat other message', (other_message) => {
    //     console.log('message:' + other_message);
    //     io.emit('chat other message', other_message);
    // });
});
http.listen(port, () => {
    console.log('SERVER LISTENING TO PORT 3500');
})
