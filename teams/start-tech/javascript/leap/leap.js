//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Se o ano for divisível por quatro e não divisível por 100; e isso tudo divisível por 400 -> retorna TRUE.
// O resto vai retornar FALSE


export const isLeap = (ano) => { 
  if ( (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ) 
  { return true } 
  else { return false } 
};

