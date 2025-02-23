import fs from 'fs';


//Escribir en un nuevo archivo
fs.writeFile('./newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});


//Renombrar un archivo
fs.rename('./newfile.txt', './renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});


//Lectura asincrona
fs.readFile('./renamedfile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);

});
