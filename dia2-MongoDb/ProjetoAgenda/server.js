require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conected to the database');
    app.emit('ready');
  })
  .catch(e => console.log(e));
const session = require('express-session'); // Cookie
const MongoStore = require('connect-mongo'); // Sessões serão salvas em um BDados
const flash = require('connect-flash'); // Mensagens em sessão, autodestrutivas
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf'); // CsrfTokens para todos os forms dos sites, para que nenhum app/site externo consiga postar coisas para dentro da aplicação (segurança)
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/midddleware');

app.use(helmet());
//Tratamento do Post(O req.body do método post, ficará undefined)
app.use(express.urlencoded({extended: true})); // Pode postar forms para dentro da aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // Arquivos estáticos, que podem ser acessados diretamente (ex: imgs, css, js)

const sessionOptions = session({
  secret: 'abaibhjasd hajiosd',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
