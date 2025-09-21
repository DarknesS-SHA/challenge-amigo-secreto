let amigos = [];

function nuevoAmigo(nombre) {
    amigos.push(nombre);
}

function eliminarAmigo(nombre) {
    amigos = amigos.filter(function (amigo) {
        return amigo !== nombre;
    });
}

function listarAmigos() {
    return amigos;
}