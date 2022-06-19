const precioDolar = 128.25;

const suma = (a,b,c) => a + b + c;
const dolarSolidario = x => x * 0.35;
const impuestoPais = x => x * 0.30;

let dolaresAComprar = parseInt(prompt("¿Cuántos dólares desea comprar?"));
let pesosTotales = parseFloat(dolaresAComprar * precioDolar);

const total = parseFloat(suma(pesosTotales, dolarSolidario(pesosTotales), impuestoPais(pesosTotales)));

alert("El total es: $" + total);



