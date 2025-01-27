let total ;
function multiplos() {
    for ( total=8;total<500;total=total+8) {
        if (total==8) {
            document.write(total);
        } else {
            document.write('-'+total);
        }
    }
    return "<br> Los múltiplos son más de 500"
}
resultado=multiplos();
document.write(resultado)