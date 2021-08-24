//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {

  constructor(numero) {
   this.numero = numero;

  }

  get sumOfSquares() {
    
   let n = 0;
   var soma = 0;
  
   while (n <= this.numero){

    soma += n**2;

    n++;

  }
  return soma;
}

  get squareOfSum() {
   let n = 0;
   var quadrado = 0;

   while (n <= this.numero){

    quadrado += n;

    n++;

   }

   var quadradoSoma = quadrado**2;
   return quadradoSoma

  }  
  
  get difference() {
  
    var diferenca = this.squareOfSum - this.sumOfSquares

    return diferenca;
  }
}