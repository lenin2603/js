
// restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto. 
class Singleton {

    // definir propiedades y métodos estáticos que pertenecen a toda la clase en lugar de pertenecer a instancias individuales. 
    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
   
        //si !es opuesto
        // si !!realizar lo apuesto 
        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}
// "const" declarar variable
//"new" para crear una nueva instancia
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');


console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);

