//FUNCION PARA GENERAR UN ALEATORIO ENTRE 2 VALORES
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//VARIABLE CON EL NUMERO ALEATORIO
let numeroAleatorio = getRandomInt(1, 999);

//primer mensaje
let valorUsuario = window.prompt(
  "introduce un numero entre el 1 y el 999 " + numeroAleatorio
);

//CONTROL DE BOTON CANCELAR
let cancelado = false;

if (valorUsuario === null) {
  cancelado = true;
}
//contador intentos
let conta = 1;
if (numeroAleatorio != null) {
  while (valorUsuario != numeroAleatorio && !cancelado) {
    console.log(valorUsuario);

    if (valorUsuario === null) {
      cancelado = true;
      // break;
    }

    if (valorUsuario < numeroAleatorio) {
      valorUsuario = window.prompt(
        "introduce un numero entre el 1 y el 999, el numero que has introducido es MENOR " +
          numeroAleatorio
      );
    } else {
      valorUsuario = window.prompt(
        "introduce un numero entre el 1 y el 999, el numero que has introducido es MAYOR " +
          numeroAleatorio
      );
    }

    if (numeroAleatorio == valorUsuario) {
      document.write(
        "<h1>HAS ACERTADO! tu número de intentos ha sido : </h1>" + conta
      );
    }

    conta++;
  }
}

if (cancelado) {
  document.write(
    "<h2>Has cancelado el juego :( tu numero de intentos ha sido :" +
      conta +
      "</h2>"
  );
}
