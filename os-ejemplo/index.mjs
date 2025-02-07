import os from 'os';

// Conocer arquitectura del sistema
console.log('Arquitectura del OS:', os.arch());

// Obtener tipo de sistema operativo
console.log('Plataforma:', os.platform());

// Cantidad de memoria en sistema

const totalMemory = os.totalmem()
console.log(`Memoria Total: ${(totalMemory / (1024 ** 3)).toFixed(2)} GB`);

//Cantidad de memoria libre
let freeMemory = os.freemem()
console.log(`Memoria Libre: ${(freeMemory / (1024 ** 3)).toFixed(2)} GB`);

//Información del CPU
console.log('Procesador', os.cpus())