const express = require('express');
const app = express();

//Tratamento do Post(O req.body do método post, ficará undefined)
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"><br>
  Idade do cliente: <input type="text" name="idade"><br>
  <button>Enviar formuário</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // req.params: As partes que vem na rota da URL
  console.log(req.params);
  // req.query : Vem na query string (ex: /testes/?chave1=valor1&chave2=valor2&chave3=valor3 (...))
  console.log(req.query);
  res.send(req.params);
})

app.post('/', (req, res) => {
  console.log(req.body) //{ nome: 'Joelma', idade: '29' }
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});