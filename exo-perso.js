const chalk = require('chalk')
const readlineSync = require('readline-sync')



/* une calculatrice convertisseur */


// to do

//1 fonctions de calcul operations de base 

 const calc = (nb1,nb2,operator) => {

  switch(operator){
    case '+' :
      return nb1 + nb2
    case '-' :
      return nb1 - nb2
    case '*' :
      return nb1 * nb2
    case '/' :
      return nb1 / nb2
    default :
     return 'error'
  } 
}

//2 conversion
const tauxBtc = 56000

const convert = (value,type) => {
  if(type === 'btc'){
    return value / tauxBtc
  }else if(type === '$'){
    return value * tauxBtc
  }else{
    return 'error'
  }

}

//3 input utilisateur

const nombre1 = readlineSync.question('entrez 1er nombre')
const nombre2 = readlineSync.question('entrez 2eme nombre')
console.log(`vous avez choisi ${nombre1} et ${nombre2}`)
const operateur = readlineSync.question('entrez un operteur')

console.log(`vous avez choisi ${operateur} votre resultat est ${calc(Number(nombre1),Number(nombre2),operateur)}`)

const monnaie = readlineSync.question('convertir en $ ou en btc ?')
console.log(`vous avez choisi de convertir en ${monnaie} la somme est de ${convert(calc(Number(nombre1),Number(nombre2),operateur),monnaie)} `)


