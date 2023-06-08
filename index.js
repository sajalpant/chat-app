const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const PORT=process.env.PORT||8080;

const app=express();
app.use('/',(req,res)=>{
    res.send('Chat App Server');
})
const server=http.createServer(app);
const io=socketio(server);
io.on('connection',(socket)=>{
    //New user has joined
    socket.on('disconnect',()=>{
        //User has left
    })
})
server.listen(PORT,()=>{
    console.log(`Server has started on port ${PORT}`);
})