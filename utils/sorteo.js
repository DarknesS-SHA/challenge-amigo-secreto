function sortearLista(lista){
    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    return lista[indiceAleatorio];
}