// Exemplo de retorno em site na porta 3020
const fun = require('../class');
const antigo = require('../textosAntigo');
const novo = require('../textosNovo');

/* let grupoant = document.querySelector('#optant');

for (z = 1; z <= antigo.livros.length; z++) {
    let option = document.createElement('option');
    option.value = antigo.livros[z].nome;
    option.appendChild(document.createTextNode(antigo.livros[z].nome));

    grupoant.appendChild(option)
}; */

// SITE EXEMPLO
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set('view engine', 'hbs');

app.listen(3020, (req, res) => {
    console.log("Servidor ligado")
})

app.get('/', (req, res) => {
    res.render('./index', {
        txt: antigo.livros[0].nome,
        txt2: novo.livros[1].nome,
        txt73: novo.livros[2].nome
    })
});

app.post('/resultado', (req, res) => {
    res.render('./index', {
        msg: "Formulário recebido",
        txt: antigo.livros[0].nome,
        txt2: novo.livros[1].nome,
        txt73: novo.livros[2].nome
    })
    const { livro, capitulo, verI, verF } = req.body;

//ANTIGO - FAZER TESTES

    for (a = 0; a < antigo.livros.length; a++) {
        if (antigo.livros[a].nome == livro) { // Para saber o livro

            for (b = 1; b <= antigo.livros[a].capitulos; b++) {
                if (b == capitulo) { // Para saber o capítulo

                    for (c = 1; c <= antigo.livros[a].leitura[b]["versi"]; c++) {
                        if (c == verI) { // Para saber o versículo inicial

                            for (d = 1; d <= antigo.livros[a].leitura[b]["versi"]; d++) {
                                if (d == verF) { // Para saber o versículo final
                                    console.log(fun.agrupar(antigo.livros[a], b, c, d));
                                }}}}}}} 
    }

// NOVO - FAZER TESTES
    for (a = 0; a < novo.livros.length; a++) {
        if (novo.livros[a].nome == livro) { // Para saber o livro

            for (b = 1; b <= novo.livros[a].capitulos; b++) {
                if (b == capitulo) { // Para saber o capítulo

                    for (c = 1; c <= novo.livros[a].leitura[b]["versi"]; c++) {
                        if (c == verI) { // Para saber o versículo inicial

                            for (d = 1; d <= novo.livros[a].leitura[b]["versi"]; d++) {
                                if (d == verF) { // Para saber o versículo final
                                    console.log(fun.agrupar(novo.livros[a], b, c, d));
                                }}}}}}} 
    }
});
