function cambiarColor() {
    let seleccion = document.getElementById("pizzas");
    document.getElementById("text1").value = seleccion.selectedIndex;
    document.getElementById("text2").value = seleccion.options[seleccion.selectedIndex].text;
    document.getElementById("text3").value = seleccion.options[seleccion.selectedIndex].value;
    let resultado = "text3" + "text2"
}
