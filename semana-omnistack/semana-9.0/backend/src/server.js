const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');

const { routes } = require('./routes/routes');

const port = process.env.PORT || 3333;

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('Usuário conectado', socket.id);
});

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-gqyfj.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(port, () => {
    console.log(`Connected on localhost:${port}`);
});