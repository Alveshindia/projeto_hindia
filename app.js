const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded ({extanded: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando' })),

//GET /aplicar desconto
router.get('/aplicarDesconto/:valor', (req, res) => {
    const valor = parseInt(req.params.valor)
    //const desconto = parseInt(req.params.desconto)
    res.json({valorDescontado: (valor * 30)/100})
})

router.get('/validaletra/:valor', (req, res) => {
    const valor = req.params.valor
    res.json({letra: valor.substring(0,1)})
})

router.get('/calculaimposto/:valor', (req, res) => {
    const valor = parseInt(req.params.valor)
    res.json({icms: (valor * 0.18)})
})

app.use('/', router)

if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log ('API funcionando')
}

module.exports = app

