function factorialIterativo(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }

let numero = window.prompt("introduce un numero");
numero=parseInt(numero);
document.write("<h2>El factorial de " + numero + " es " + factorialIterativo(numero)+"</h2>");
