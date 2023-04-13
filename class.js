// Estrutura do objeto

// Cauan: daniel e hebreus

/* 
let tudo = [genesis, exodo, levitico, numeros, deuteronomio, josue, juizes, rute, Isamuel, IIsamuel, Ireis, IIreis, Icronicas, IIcronicas, esdras, tobias, judite, ester, Imacabeus, IImacabeus, jo, salmos, proverbios, eclesiastes, canticos, sabedoria, eclesiastico, isaias, jeremias, lamentacoes, baruc, ezequiel, daniel, oseias, joel, amos, abdias, jonas, miqueias, naum, habacuc, sofonias, ageu, zacarias, malaquias, mateus, marcos, lucas, joao, atos, romanos, Icorintios, IIcorintios, galatas, efesios, filipenses, colossenses, Itessalonicenses, IItessalonicenses, Itimoteo, IItimoteo, tito, filemon, hebreus, tiago, Ipedro, IIpedro, Ijoao, IIjoao, IIIjoao, judas, apocalipse] 
*/

module.exports = {
    newLivro (i, n, a, c, l) {
        function Livro (id, nome, abr, capitulos, leitura) {
            this.id = id;
            this.nome = nome;
            this.abr = abr;
            this.capitulos = capitulos;
            this.leitura = leitura;
        }
        return new Livro (i, n, a, c, l)
    },
    
    agrupar (livro, cap, numI, numF) {
        numI = numI == 0 ? 1 : numI;
        numF = numF < numI ? numI : numF;
        
        let escolhido = [];
        for (i = numI; i <= numF; i++) {
            escolhido.push(livro.leitura[cap][i]);
        };
        console.log(escolhido.join(" "));
    }
};
