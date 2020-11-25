const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { 
    userJoin, 
    getCurrentUser,
    userLeave,
    getRoomUsers    
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folde
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Chatify Chatter';

//run when client connects 
io.on('connection', socket => {
    socket.on('JoinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

   // Welcoms new user
   socket.emit('message', formatMessage(botName,'Welcome to Chatify - a Personal Chat System!'));

   //Broadcast when a user connect
   socket.broadcast.to(user.room)
   .emit(
       'message',
        formatMessage(botName, `${user.username} has joined the chat`)
        ); //notifies everyone but the user

        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    //Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message',formatMessage(user.username, msg));
    });
      //Run when client disconnects
      socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message',
             formatMessage(botName, `${user.username} has left the chat`)
             );
        
            //Send users and room info
         io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
        }
    });

});

const PORT = 3000 || process.env.PORT; //check for env port, if none use port 3000

server.listen(PORT, () => console.log(`Server running on ${PORT}`));