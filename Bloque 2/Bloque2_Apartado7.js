function cargavalores(){
    let resultado, valoresnegativos=0, valorespositivos=0, multiplosde15=0, acumuladonumerospares=0;
    for (let numero=1;numero<=10;numero++){
    let valor=parseInt(prompt("Introduce un número"))    
        if(valor>0){
            valorespositivos++;
        }else if(valor<0){
            valoresnegativos++;
        }
        if(valor % 15 == 0){
            multiplosde15++;
        }
        if(valor % 2 == 0){
            acumuladonumerospares++; 
        }  
    }return "Los valores positivos son " +valorespositivos+ " , por otro lado, los valores negativos son " +valoresnegativos+" , también, los multiplos de 15 son " +multiplosde15+ " y por último los números pares son " +acumuladonumerospares+"";
}
let resultadofinal=cargavalores()
document.write(resultadofinal)