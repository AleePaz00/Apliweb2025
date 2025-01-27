
function traducción(mostrarPalabra) {
    let texto;
    switch (mostrarPalabra) {
    case 'casa':
        texto="House"
        break;
    case 'mesa':
        texto="Table"   
        break;
    case 'perro':
        texto="Dog"    
        break;
    case 'gato':
        texto="Cat" 
        break;
    default:
        texto=0
}
return texto
}
palabra=prompt("Introduce una palabra de estas para ver su traducción: casa, mesa, perro o gato")
let resultado=traducción(palabra);
document.write(resultado);
