//Igualdad (==)
//Desigualdad (!=)
//&& AND (el resultado es verdadero si ambas expresiones son verdaderas) || OR (el resultado es verdadero si alguna expresión es verdadera)
//Incremento ++ y decremento --
// Si el operador ++ se indica como sufijo del identificador de la variable, su valor se incrementa después de ejecutar la sentencia en la que aparece.

class Rectangulo {

    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calgularArea() {
        console.log( this.#area * 2 );
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area  = 100;
rectangulo.calgularArea();

console.log(rectangulo);



