function censarPersonas() {
    let totalPersonas = 0;
    let cantidadVarones = 0;
    let cantidadMujeres = 0;
    let cantidadVaronesGrandes = 0;
    let documento;
    do {
      documento = parseInt(prompt("Ingrese número de documento (0 para finalizar):"));
      if (documento > 0) {
        let edad = parseInt(prompt("Ingrese la edad:"));
        let sexo = prompt("Ingrese el sexo (masculino/femenino):");
        if (sexo == "masculino") {
          cantidadVarones++;
          if (edad >= 16 && edad <= 65) {
            cantidadVaronesGrandes++;
          }
        }
        if (sexo == "femenino") {
          cantidadMujeres++;
        }
        totalPersonas++;
      }
    } while (documento !== 0);
    return {
      totalPersonas: totalPersonas,
      cantVarones: cantidadVarones,
      cantMujeres: cantidadMujeres,
      cantVaronesGrandes: cantidadVaronesGrandes};
  }
  function mostrarResultados(censo) {
    document.write("Total de personas censadas: " + censo.totalPersonas + "<br>");
    document.write("Cantidad de varones: " + censo.cantVarones + "<br>");
    document.write("Cantidad de mujeres: " + censo.cantMujeres + "<br>");
    document.write("Cantidad de varones entre 16 y 65 años: " + censo.cantVaronesGrandes + "<br>");
  }
  let resultadosCenso = censarPersonas();
  mostrarResultados(resultadosCenso);