const fs = require("fs");

const fileName = "example1.txt";

// Crear archivo

fs.writeFileSync(fileName, "Hello world. Este es el archivo de ejemplo");
console.log("Archivo creado correctamente");

//Leer archivo
const content = fs.readFileSync(fileName, "utf-8");
console.log("File content:", content);

//Actualizar archivo
fs.appendFileSync(fileName, "\nEsta es una nueva linea.");
console.log("Archivo actualizado correctamente");
