function primeraMitad(cadena){
    let documento;
    documento=cadena.substring(0, cadena.length/2);
    return documento
}

function ultimoCaracter(cadena){
    let documento;
    documento=cadena.charAt(cadena.length-1);
    return documento
}

function cadenaReversa(cadena){
    let documento= '';
    for (let f = 0; f < cadena.length; f++) {
        documentoPedir= cadena.charAt(cadena.length-f-1);
        documento=documento+documentoPedir
    }
    return documento;
}

function separadoGuion(cadena){
    let documento;
    for (let f = 0; f < cadena.length; f++) {
        documento=cadena.charAt(f) + '-'
    }
}

function imprimirVocales(cadena){
    cadena=cadena.toLowerCase()
    let contarVocales=0
    for (let acumulador = 0; acumulador < cadena.length; acumulador++){
        let i = cadena.charAt(acumulador)
        if (i =='a' || i =='e' || i =='i' || i =='o' || i == 'u') {
            contarVocales++
        }
    }
    return contarVocales
}

function RESULTADOS(cadena){
    let mitad = primeraMitad(cadena);
    let ultimo=ultimoCaracter(cadena);
    let reversa= cadenaReversa(cadena);
    let guion=separadoGuion(cadena);
    let vocales=imprimirVocales(cadena);
    return "La primer mitad de la cadena es: "+mitad+"<br>El ultimo caracter de la cadena es: "+ultimo+"<br>La cadena es reverso es: "+reversa+"<br>Los caracteres de la cadena separadas por un guión es: "+guion+"<br>La cantidad de vocales almacenadas es: "+vocales
}


let cadena=prompt("Ingrese una cadena")
let resultado=RESULTADOS(cadena);
document.write(resultado)
