const fs = require('fs');
const colors = require("colors");
const crearArchivo = async (base = 5, listar, hasta) => {
    let salida = '';
    try {
        for (let index = 1; index < hasta +1; index++) {
            salida += `${base} x ${index} = ${index * base} \n`
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if (listar) {
            console.log("====================".rainbow)
            console.log("   Tabla del ".green, base)
            console.log("====================".rainbow)

            console.log(salida.random)
        }
        return (`tabla-${base}.txt creada`.inverse)
    } catch (error) {
        console.log("No es posible crear archivo")
    }
}
module.exports = crearArchivo;