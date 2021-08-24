//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9  
  };

export const decodedValue = (colorArray) => {

   return colors[colorArray[0]]*10 + colors[colorArray[1]];
};

// outra possibilidade transformando em string
//const colors = {
//  black: "0",
//  brown: "1",
//  red: "2",
//  orange: "3",
//  yellow: "4",
//  green: "5",
//  blue: "6",
//  violet: "7",
//  grey: "8",
//  white: "9"  
//  };
//
//export const decodedValue = (colorArray) => {
//
//   return colors[colorArray[0]] + colors[colorArray[1]];  ----> ai não precosa multiplicar por 10 pra colocar o primeiro numero como dezena. Desse jeito ele coloca a string 1 e a string 2.
//};
