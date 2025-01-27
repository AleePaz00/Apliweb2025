function pedirValores() {
    let suma = 0;
    let valor;
    do {
      valor = parseInt(prompt("Ingrese un valor (9999 para finalizar)"));
      if (valor !== 9999) {
        suma += valor;
      }
    } while (valor !== 9999);
    return suma;
  }
  function mostrarResultados(suma) {
    document.write("Valor acumulado total: " + suma + "<br>");
    
    if (suma > 0) {
      document.write("El valor acumulado es mayor a cero");
    } else if (suma === 0) {
      document.write("El valor acumulado es cero");
    } else {
      document.write("El valor acumulado es menor a cero");
    }
  }
  let sumaTotal = pedirValores();
  mostrarResultados(sumaTotal);