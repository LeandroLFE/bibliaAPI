// Estrutura do objeto
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