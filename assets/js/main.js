function enviar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let elementoResultado = document.getElementById('resultado');

    //console.log(`${nombre}`);
    //console.log(`${apellido}`);
    //console.log(`${edad}`);

    var texto = nombre +' '+ apellido;
    var edadMax = Number(21);

    if( edad >= edadMax){
        elementoResultado.textContent = `El usuario ${texto} es MAYOR de edad tiene ${edad} años`;
    }else{
        elementoResultado.textContent = `El usuario ${texto} es MENOR de edad tiene ${edad} años`;
    }

    alert(texto);
}