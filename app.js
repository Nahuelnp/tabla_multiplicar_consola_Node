
const argv = require("./config/yargs");
const crearArchivo = require("./helpers/multilicar");


console.clear();

//console.log(argv)

//no se hace asi
/* const [,,arg3] = process.argv;
const [,base] = arg3.split('=')
console.log(base) */
//no se hace asi, se utiliza yarg

crearArchivo(argv.base,argv.listar,argv.hasta).then(n=>console.log(n)).catch(err=>console.log(err));