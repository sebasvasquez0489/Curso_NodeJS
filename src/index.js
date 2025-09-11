//  process.argv --> Es un array que contiene los argumentos de la linea de comandos, se utiliza para poder ejecutar el programa con la intrucción node src/index.js + arg1 arg2

// Utilizamos el metodo "slice(2)" el cual permite eliminar  los 2 primeros elementos del array  los cuales son la ruta  de Node y ruta del script actual

const args = process.argv.slice(2);

let min = 1;
let max = 100;

if (args.length >= 2) {
  // Se realiza parseInt para el cambio de string a number como base 10
  const parseMin = parseInt(args[0], 10);
  const parseMax = parseInt(args[1], 10);

  // Se realiza validación de los 2 argumentos , los cuales seran rango minimo y maximo, pero si no se pasan se usaran valores por defecto entre  1 y 100.
  if (!isNaN(parseMin) && !isNaN(parseMax) && parseMin < parseMax) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log("🚫 Rango invalido. Usando valores por defectp (1 - 100).");
  }
}

// Se crea la logica para los numeros aleatorios
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(
  `Numero aleatorio generado entre ${min} y ${max} : ${randomNumber}`
);
