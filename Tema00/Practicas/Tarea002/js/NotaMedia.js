let nota = window.prompt("Introduce una nota");
let cancelado = false;
let conta = 0;

nota = parseInt(nota);
let SumaNotas = nota;

while (!cancelado) {
    nota = window.prompt("Introduce una nota");
    
    if (nota === null) {
        cancelado = true;
    } else {
        nota = parseInt(nota);
        SumaNotas += nota;
        conta++;
    }

}

if (conta > 0) {
    
    let media = SumaNotas / conta;
    document.write(`<h2>la media  de las notas es: ${media}</h2>`);
};