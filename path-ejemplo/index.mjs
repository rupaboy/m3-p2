import path from 'path';

//Definir ruta de ejemplo
const filePath = './data/example.txt';

//Obtener dir base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//Obtener nombre de archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//Obtener extensión
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//Ruta unida
const newPath = path.join('/user', 'docs' , 'newfile.txt');
console.log('Nueva ruta del archivo:', newPath)