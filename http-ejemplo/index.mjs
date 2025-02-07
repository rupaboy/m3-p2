import http from 'http';

//Crear un servidor HTTP básico
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type',  'text/html; charset=UTF-8');
    res.end('¡Hola,Mundo!');
});

//Configurar el server en :3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});