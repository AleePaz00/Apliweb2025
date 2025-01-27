function enteromenor(valor1, valor2, valor3){
    let resultado;
    valor1=parseInt(prompt("Introduce el primer valor"));
    valor2=parseInt(prompt("Introduce el segundo valor"));
    valor3=parseInt(prompt("Introduce el tercer valor"));
    if(valor1>valor2 && valor3>valor2){
        resultado="El valor 2 es el menor"
    }else if(valor2>valor3 && valor1>valor3){
        resultado="El valor 3 es el menor"
    }else if(valor3>valor1 && valor2>valor1){
        resultado="El valor 1 es el menor"
    }return resultado;
}
let resultadofinal=enteromenor();
document.write(resultadofinal);