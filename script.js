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
    fetch("https://post-bck.onrender.com/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo : titulo.value,
	        musico : musico.value,
            genero : genero.value,
            imagem : imagem.value,
            descricao : descricao.value,
        })
    })
    .then(response => response.json())
    .then(() => { alert("Feito")})
    .catch(error => console.error('Error:', error));
}else {
    alert('Sem permissao otario!')
}
})