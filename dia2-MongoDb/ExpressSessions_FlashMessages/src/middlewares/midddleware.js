exports.middlewareGlobal = (req, res, next) => {
    // Para injetar um conteudo em todas as páginas
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
    if(req.body.client) {
        req.body.client = req.body.client.replace('Assis Silva', 'Não colooque os sobrenomes')
        console.log(`\n  Vi que você postou ${req.body.client} \n`);
    }

    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

