const test = require('tape')
const supertest = require('supertest')
const app = require('./app')

test('projeto hindia 300*(30/100)', (t) => {
    supertest(app)
    .get('/aplicarDesconto/300')
    .expect('/Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert (res.body.valorDescontado === 90, 'Desconto correto')
        t.end()

    })
})

test ('teste da letra', (t) =>  {
    supertest(app)
    .get('/validaletra/zebra')
    .expect('/Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert (res.body.letra === "z", 'correto')
        t.end()
})
})

test ('validacao do icms', (t) =>  {
    supertest(app)
    .get('/calculaimposto/100')
    .expect('/Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert (res.body.icms === 18, 'correto')
        t.end()
})
})

