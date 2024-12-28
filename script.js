const send = document.querySelector(".btn")

const pass = document.querySelector("#password")
const titulo = document.querySelector("#titulo")
const musico = document.querySelector("#musico")
const genero = document.querySelector("#genero")
const imagem = document.querySelector("#imagem")
const descricao = document.querySelector("#descricao")
const letra = document.querySelector("#letra")


send.addEventListener("click",() => {
if (pass.value === "02082000") {
    alert(`Titulo: ${titulo.value}\nMusico: ${musico.value}\nGenero: ${genero.value}\nImagem ${imagem.value}\nDescricao: ${descricao.value}\nLetra ${letra.value}`)
}else {
    alert('Sem permissao otario!')
}
})