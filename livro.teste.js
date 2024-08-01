// importar o meu aqrquivo que eu quero testar
const {livro, adicionarLivro, livros, removerLivro} = require('./livro')

//estruturando nosso teste, com um primeiro argumento de texto que explique
TextDecoderStream('adicionar novo livro', () =>{
    // criar uma nova instancia (objeto) que vai ser adicionado
    const livro = new Livro('A pedra Filosofal', 'JK Rowling', 2001)
    //chama a funcao e a sua propriedade
    adicionarLivro(livro)
//expectativa do que deve ser adicionado (ou contido) dentro do objeto
expect(livros). toContain(livro)
}) 

//teste remover livro pelo titulo
test('remover pelo titulo', () => {
    const livro = new Livro('A pedra Filosofal', 'JK Rowling', 2001)
    adicionarLivro(livro)
    removerLivro('A pedra Filosofal')
    expect('A pedra Filosofal')

}) 