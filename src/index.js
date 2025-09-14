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
    console.log(
      "🚫 Rango invalido. Se debe usar valores por defecto (1 a 100)."
    );
    //return; // <--Utilizo para detener el programa ya que los argumentos no son validos

    // Tambien puedo utilizar metodos propios de Node.JS
    // process es un objeto global de Node.js.
    // .exit() es un método de ese objeto que finaliza el programa.
    // El número que le pasas (0, 1, etc.) es un código de salida:
    // 0 → terminó correctamente.
    // 1 (u otro distinto de 0) → terminó con error.
    process.exit(1); // <--Utilizo para detener el programa ya que los argumentos no son validos
  }
}

// Se crea la logica para los numeros aleatorios
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(
  `🎲 Numero aleatorio generado entre ${min} y ${max} : ${randomNumber}`
);
