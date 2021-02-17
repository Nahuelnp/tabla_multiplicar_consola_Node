const argv = require('yargs')
            .options({
                'b':{
                alias:"base",
                type:"number",
                demandOption:true,
                describe:"numero base para tabla de multiplicar"
                },
                'l':{
                    alias:"listar",
                    type:'boolean',
                    demandOption:false,
                    default: false,
                    describe:"Muestra la tabla en consola"
                    },'h':{
                        alias:"hasta",
                        type:'number',
                        demandOption:false,
                        default: 10,
                        describe:"hasta que numero llegara la tabla"
                        }
            }).check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'la base debe ser un numero'
                }
                return true;
            })
            .argv ;

 module.exports = argv;