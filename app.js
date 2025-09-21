// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(nombre) {
    let nombreAmigo = document.getElementById("amigo").value
    amigos.push(nombreAmigo)

    let lista = document.getElementById("listaAmigos")
    let li = document.createElement("li")
    li.textContent = nombreAmigo
    lista.appendChild(li)

    document.getElementById("amigo").value = ""

}