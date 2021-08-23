//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// o triângulo e uma classe, e os sides a,b e c são parâmetros da classe.

export class Triangle {
  sideA;
  sideB;
  sideC;

  sides;

  constructor(...sides) {
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
    this.sides = sides;
  }

  get isAllSidesGreaterThan0() {

// usando funções de array https://www.w3schools.com/jsref/jsref_some.asp
    // this.sides.some(size => size === 0);

   return this.sideA > 0 && this.sideB > 0 && this.sideC > 0; 
  }

  get isTriangleInequality() {

   // if ((this.sideA + this.sideB) >= this.sideC) {
    //   return true;
    // } else if ((this.sideB + this.sideC) >= this.sideA) {
    //   return true
    // } else if ((this.sideC + this.sideA) >= this.sideB) {
    //   return true
    // } else {
    //   return false;
    // }

    // return ((this.sideA + this.sideB) >= this.sideC) || ((this.sideB + this.sideC) >= this.sideA) || ((this.sideC + this.sideA) >= this.sideB);  
  
    const isBaseValidC = ((this.sideA + this.sideB) >= this.sideC);
    const isBaseValidA = ((this.sideB + this.sideC) >= this.sideA);
    const isBaseValidB = ((this.sideC + this.sideA) >= this.sideB);

    return isBaseValidA && isBaseValidB && isBaseValidC;
  }

  get isValidTriangle() {
    return this.isAllSidesGreaterThan0 && this.isTriangleInequality;
  }

  get isEquilateral() {
    const isSideAEqualSideB = this.sideA === this.sideB;
    const isSideBEqualSideC = this.sideB === this.sideC;

    return this.isValidTriangle && (isSideAEqualSideB && isSideBEqualSideC);
  }

  get isIsosceles() {
    const isSideAEqualSideB = this.sideA === this.sideB;
    const isSideBEqualSideC = this.sideB === this.sideC;
    const isSideAEqualSideC = this.sideA === this.sideC;
    
    return this.isValidTriangle && (isSideAEqualSideB || isSideAEqualSideC || isSideBEqualSideC);
  }

  get isScalene() {
    return this.isValidTriangle && (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideC !== this.sideA);
  }

  get isDegenerate () {

   return this.isValidTriangle && (this.sideA + this.sideB === this.sideC || this.sideB + this.sideC === this.sideA || this.sideA + this.sideC === this.sideB)
  }
}
