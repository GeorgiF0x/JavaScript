//funcion area y perimetro circulo

let area=(radio)=>{
    return Math.PI*(radio**2);
};

let perimetro=(radio)=>{
    return 2*Math.PI*radio
};

//funcion area y perimetro de poligono

let areaPoligono = (longitudLado, numero_lados) => {
    return (numero_lados * longitudLado ** 2) / (4 * Math.tan(Math.PI / numero_lados));
};

let perimetroPoligono=(numero_lados,longitudLado)=>{
    return numero_lados*longitudLado;
};



let radio=window.prompt("cual es el radio del circulo");
document.write(`<h2 style="color: red;">El área del círculo dado su radio es ${area(radio)} m²/cm²</h2>`);
document.write(`<h2 style="color: red;">El área del círculo dado su radio es ${perimetro(radio)} m/cm</h2>`);

let longitudLado=window.prompt("indica la longitud del lado");
let numLados=window.prompt("indica el numero de lados del poligono");
document.write(`<h2 style="color: blue;">El área del círculo dado su radio es ${areaPoligono(longitudLado,numLados)} m²/cm²</h2>`);
document.write(`<h2 style="color: blue;">El área del círculo dado su radio es ${perimetroPoligono(longitudLado,numLados)} m/cm</h2>`);