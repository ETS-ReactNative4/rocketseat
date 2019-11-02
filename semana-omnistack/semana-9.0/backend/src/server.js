const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const { routes } = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-gqyfj.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port, () => {
    console.log(`Connected on localhost:${port}`);
});