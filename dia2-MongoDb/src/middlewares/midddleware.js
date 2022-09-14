exports.middlewareGlobal = (req, res, next) => {
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