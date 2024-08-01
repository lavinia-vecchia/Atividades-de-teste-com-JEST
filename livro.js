class livro{
    constructor(titulo, autor, anoPublicaçao){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicaçao = anoPublicaçao
    }
}

const livros = []

function adicionarLivro(livro){
    // funcao push para adicionar
    livros.push(livro)
    console.log("livro adicionado")
}

function removerLivro(titulo){
    const index = livros.findIndex (livro => livro.titulo === titulo)
//verificar se o livro foi encontrado
if (index !== -1){
    //funcao splice = remove objetos elementos de listas
    const livroRemovido = livros.splice(index, 1[0])
    return true
}
return false

}
module.exports = {livros,adicionarLivro, livro, removerLivro}