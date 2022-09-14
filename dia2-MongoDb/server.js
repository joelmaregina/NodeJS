const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://joelmaregina:123456js@coursejstsnode.x4b5ia1.mongodb.net/BaseDedados?retryWrites=true&w=majority';
mongoose.connect(connectionString);

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/midddleware');

//Tratamento do Post(O req.body do método post, ficará undefined)
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});