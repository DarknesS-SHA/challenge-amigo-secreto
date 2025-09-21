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