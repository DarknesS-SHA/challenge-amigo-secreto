function mostrarAmigo(nombre) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function obtenerValorInput() {
    return document.getElementById("amigo").value.trim();
}
