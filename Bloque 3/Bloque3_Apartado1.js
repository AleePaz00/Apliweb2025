function cargar(vec) {
    for (let f = 0; f < vec.length; f++) {
        let valor = prompt('Ingrese componente:');
        vec[f] = parseInt(valor);
    }
}

function sumar(vec) {
    let suma = 0;
    for (let f = 0; f < vec.length; f++) {
        suma = suma + vec[f];
    }
    document.write('Valor acumulado de las componentes:' + suma + '<br>');
}

function sumarMayor36(vec) {
    let suma = 0;
    for (let f = 0; f < vec.length; f++) {
        if (vec[f] > 36) {
            suma = suma + vec[f];
        }
    }
    document.write('Valor acumulado de las componentes mayores a 36:' + suma + '<br>');
}

function cantidadMayores50(vec) {
    let cant = 0;
    for (let f = 0; f < vec.length; f++) {
        if (vec[f] > 50) {
            cant = cant + 1;
        }
    }
    document.write('Cantidad de componentes mayores a 50:' + cant + '<br>');
}

let vec = new Array(8);
cargar(vec);
sumar(vec);
sumarMayor36(vec);
cantidadMayores50(vec);