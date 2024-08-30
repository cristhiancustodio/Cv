const formatTexto = (texto) => {
    // Reemplaza los saltos de línea con <br>
    return texto ? texto.replace(/\n/g, '<br>') : '';
}

export {
    formatTexto
}