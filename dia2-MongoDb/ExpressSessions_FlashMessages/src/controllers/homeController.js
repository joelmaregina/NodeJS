// const HomeModel = require('../models/HomeModel');

// Cria o resgistro na base de dados
// HomeModel.create({
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// Lista/Acha os itens da base de dados (Raramente utilizado desta maneira)
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'Joelma', logado: true};
    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'asfiosifisd');
    // req.flash('succes', 'Meromeromei');
    console.log(req.session.usuario);
    console.log(req.flash('error'), req.flash('Success'), req.flash('info'));
    res.render('index', {
        // Para injetar um conteúdo na Home:
        titulo: undefined,
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};

