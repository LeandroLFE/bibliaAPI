// Retorno de informações
let fun = require('./class');
let antigo = require('./textosAntigo');
let novo = require('./textosNovo')

// Para retornar um valor, utilize o modelo (o que está em caps deve ser alterado): classjs.agrupar(TESTAMENTO.LIVRO, CAPÍTULO, VERSÍCULO INICIAL, VERSÍCULO FINAL)

console.log('// Para selecionar específico');
fun.agrupar(antigo.genesis, 1, 1, 3);

console.log('')

console.log('// Para selecionar tudo');
fun.agrupar(antigo.genesis, 1, 1, antigo.genesis.leitura[1]["versi"]);