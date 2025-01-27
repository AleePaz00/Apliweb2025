function ladoyperimetro(){
    let resultado, valor;
    valor=parseInt(prompt("Introduce el lado de un cuadrado"))
    resultado="El perímetro es de " +valor*valor+"cm²";
    return resultado;
}
let resultadofinal=ladoyperimetro();
document.write(resultadofinal);