function mostrarcuatrimestreactual(){
    let resultado;
    cuatrimestreactual = new Date();
    mes= cuatrimestreactual.getMonth();
    document.write("El mes actual es "+cuatrimestreactual.getMonth());
    document.write("<br>");
    if(cuatrimestreactual>=1 && cuatrimestreactual <=4){
        resultado="Estamos en el 1er cuatrimestre"
    }else if(cuatrimestreactual>=4 && cuatrimestreactual<=8){
        resultado="Estamos en el segundo cuatrimestre"
    }else(resultado="Estamos en el tercer cuatrimestre")
    return resultado;
    }
    let resultadofinal=mostrarcuatrimestreactual();
    document.write(resultadofinal);