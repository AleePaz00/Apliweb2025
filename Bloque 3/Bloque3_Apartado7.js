function verificar() {
    let deportes = "";
    if (document.getElementById("checkbox1").checked) {
        deportes = deportes + "Fútbol ";
    }
    if (document.getElementById("checkbox2").checked) {
        deportes = deportes + "Baloncesto ";
    }
    if (document.getElementById("checkbox3").checked) {
        deportes = deportes + "Tenis";
    }
    alert("Los deportes seleccionados son:" + deportes);
}