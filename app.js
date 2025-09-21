// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const nombre = obtenerValorInput();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    nuevoAmigo(nombre);
    mostrarAmigo(nombre);
    limpiarInput();

    console.log(listarAmigos());
}

function sortearAmigo() {
    const lista = listarAmigos();

    if (lista.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    const amigoSorteado = lista[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong>";

    console.log("Amigo sorteado:", amigoSorteado);
}