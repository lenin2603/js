class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }
//Las funciones Get supervisan los errores en los guiones o capturan información sobre el estado del archivo o las acciones que se están realizando.
    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}
//declarar variable
const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}      

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( fher );


persona1.getInfo();
persona2.getInfo();



