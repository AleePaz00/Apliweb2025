function generarTabla(tabla) {
    let conta = tabla;
    for (let number = 1; number <= 12; number++) {
      document.write(conta + " ");
      conta = conta + tabla;
    }
  }
  function tabla() {
    let tabla = parseInt(prompt("Ingrese un valor del 1 al 10:", ""));
    generarTabla(tabla);
  }
  tabla();