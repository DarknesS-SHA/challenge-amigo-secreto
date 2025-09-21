function mostrarAmigo(nombre) {
    const chipsContainer = document.getElementById("chipsContainer");

    const chip = crearChip(nombre)

    const btnRemove = eliminarChip(nombre,chip)

    chip.appendChild(btnRemove);
    chipsContainer.appendChild(chip);
}
function crearChip(nombre) {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = nombre;
    return chip;

}

function eliminarChip(nombre,chip) {
    const btnRemove = document.createElement("div");
    btnRemove.className = "remove";
    btnRemove.textContent = "✕";
    btnRemove.onclick = function () {
        chip.remove();
        // también eliminar del array amigos
        eliminarAmigo(nombre);
    };
    return btnRemove;
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function obtenerValorInput() {
    return document.getElementById("amigo").value.trim();
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}
