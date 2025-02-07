import { EventEmitter } from 'events';

//Crea una instancia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

//Emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo');
