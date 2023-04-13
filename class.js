// Estrutura do objeto
// Colaboradores: Maxwel, Viviane, João Gabriel, Murilo, Renan, Cauan, Abraão, Daniel e Letícia


// Sem ninguém ANTIGO: tobias (14), ester (16), Imacabeus (16), IImacabeus (15), Jo (42), eclesiastes(12), sabedoria (19), zacarias (14)

// Maxwel:  neemias 10:3-28 // neemias 12:13-21
// Letícia: eclesiastico, ezequiel e apocalipse 
// Daniel: salmos e isaias
// Cauan: daniel e hebreus
// Murilo: IIreis
// Renan: judite
// Abraão: oseias
// João: 
// Camila: Icorintios (13-16), IIcorintios (13)
// Vivi: 

// Prontos ANTIGO (falta 17)
/* 
let antigoCriados = [[IIreis], [neemias, tobias, judite, ester, Imacabeus, IImacabeus, jo, salmos], [eclesiastes], [sabedoria, eclesiastico, isaias], [ezequiel, daniel, oseias], [zacarias]];

let todosAntigo = [genesis, exodo, levitico, numeros, deuteronomio, josue, juizes, rute, Isamuel, IIsamuel, Ireis, [1], Icronicas, IIcronicas, esdras, [8], proverbios, [1], canticos, [3], jeremias, lamentacoes, baruc, [3], joel, amos, abdias, jonas, miqueias, naum, habacuc, sofonias, ageu, [1], malaquias] 
*/

// Prontos NOVO (falta 2)
/* 
let novoCriados = [[hebreus], [apocalipse]]

let todosNovo = [mateus, marcos, lucas, joao, atos, romanos, Icorintios, IIcorintios, galatas, efesios, filipenses, colossenses, Itessalonicenses, IItessalonicenses, Itimoteo, IItimoteo, tito, filemon, [1], tiago, Ipedro, IIpedro, Ijoao, IIjoao, IIIjoao, judas, [1]]; 
*/

// Tudo
/* 
let tudo = [genesis, exodo, levitico, numeros, deuteronomio, josue, juizes, rute, Isamuel, IIsamuel, Ireis, IIreis, Icronicas, IIcronicas, esdras, [neemias], tobias, judite, ester, Imacabeus, IImacabeus, jo, salmos, proverbios, eclesiastes, canticos, sabedoria, eclesiastico, isaias, jeremias, lamentacoes, baruc, ezequiel, daniel, oseias, joel, amos, abdias, jonas, miqueias, naum, habacuc, sofonias, ageu, zacarias, malaquias, mateus, marcos, lucas, joao, atos, romanos, Icorintios, IIcorintios, galatas, efesios, filipenses, colossenses, Itessalonicenses, IItessalonicenses, Itimoteo, IItimoteo, tito, filemon, hebreus, tiago, Ipedro, IIpedro, Ijoao, IIjoao, IIIjoao, judas, apocalipse] 
*/
// FALTA neemias 10:3-28 // neemias 12:13-21
// "versi": ,

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
