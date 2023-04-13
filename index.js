let fun = require('./class');
let antigo = require('./textosAntigo');
let novo = require('./textosNovo')

// Para retornar um valor, utilize o modelo (o que está em caps deve ser alterado): classjs.agrupar(textosjs.LIVRO, CAPÍTULO, VERSÍCULO INICIAL, VERSÍCULO FINAL)
fun.agrupar(antigo.genesis, 1, 1, 3);
fun.agrupar(novo.mateus, 1, 1, 3);
