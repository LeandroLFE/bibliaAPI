# Descrição
Bíblia completa (73 livros) em português.

## Instalação
```bash
  # Clonar o repositório 
  $ git clone https://github.com/Camilay3/bibliaAPI
```
```bash
  # Navegar até a pasta
  $ cd bibliaAPI
```
```bash
  # Instalar dependências 
  npm install
```
```bash
  # Iniciar a api
  npm start
```

## Acesso ao exemplo
Após iniciar, é possível acessar a página de exemplo:<br>
→ <a href="http://localhost::3020">http://localhost::3020</a>

## Uso
Template
```javascript
  // Para exibir valor diretamente
  console.log(fun.agrupar(testamento.livro, capítulo, versículo inicial, versículo final))
  
  // "testamento" se refere às opções antigo ou novo
```

Exemplo (Gn 1:1-3)
```javascript
  // Diretamente
  console.log(fun.agrupar(antigo.genesis, 1, 1, 3))
  
  // Utilizando listas
  console.log(fun.agrupar(antigo.livros[0], 1, 1, 3))
```

## Créditos
→ Documentar o código (responsável: Camila Azevedo)<br>
→ Documentar os textos (responsáveis: Camila Azevedo, João Gabriel, Viviane Rodrigues, Maxwel Gomes, Daniel Anastácio e Maria Letícia)
