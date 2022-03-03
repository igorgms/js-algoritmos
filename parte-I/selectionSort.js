const livros = require("./listaLivros");
const menorValor = require("./menorValor");

// for (let atual = 0; atual < livros.length - 1; atual++) {
//   let menor = menorValor(livros, atual);

//   let livroAtual = livros[atual];
//   console.log("livro atual", livroAtual);
//   let livroMenorPreco = livros[menor];
//   console.log("livro menor", livroMenorPreco);

//   livros[atual] = livroMenorPreco;
//   livros[menor] = livroAtual;
// }
// console.log(livros);

livros.forEach((livro, atual) => {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
});

console.log(livros);
