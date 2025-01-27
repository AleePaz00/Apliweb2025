function ConceptoAcumulador() {
    let empleadosEntre100y300 = 0;
    let empleadosMasDe300 = 0;
    let gastoTotal = 0;
  
    for (let number = 1; number <= 5; number++) {
      let sueldo = parseFloat(prompt("Ingrese el sueldo del empleado " + number + ":"));
      gastoTotal += sueldo;
      if (sueldo >= 100 && sueldo <= 300) {
        empleadosEntre100y300++;
      } else if (sueldo > 300) {
        empleadosMasDe300++;
      }
    }
    document.write("Empleados que cobran entre $100 y $300: " + empleadosEntre100y300 + "<br>");
    document.write("Empleados que cobran más de $300: " + empleadosMasDe300 + "<br>");
    document.write("Gasto total en sueldos:" + gastoTotal+"€");
  }
  ConceptoAcumulador();
  