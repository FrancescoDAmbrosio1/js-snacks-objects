/*      JSnack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
Crea un nuovo array con la lista dei mammiferi.
[
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
 */

const animali = [
    {
        nome: 'Scimpanzé',
        famiglia: 'primati',
        classe: 'mammiferi'
    },
    {
        nome: 'Maiale',
        famiglia: 'suidi',
        classe: 'mammiferi'  
    },
    {
        nome: 'Serpente',
        famiglia: 'colubridi',
        classe: 'rettili'  
    },
    {
        nome: 'Pappagallo',
        famiglia: 'psitaccidi',
        classe: 'uccelli'  
    },
    {
        nome: 'Asino',
        famiglia: 'equidi',
        classe: 'mammiferi'  
    },
    {
        nome: 'Delfino',
        famiglia: 'delfinidi',
        classe: 'mammiferi'  
    },
    {
        nome: 'Squalo',
        famiglia: 'elasmobranchi',
        classe: 'pesci'  
    },
    {
        nome: 'Ragno',
        famiglia: '',
        classe: 'insetti'  
    },
    {
        nome: 'Cane',
        famiglia: 'canidi',
        classe: 'mammiferi'  
    },
    {
        nome: 'Rana',
        famiglia: 'ranidi',
        classe: 'anfibi'  
    }
]
console.log(animali);
const mammiferi = []

//Itero l'arrei ed ogni oggetto con la classe 'mammiferi' lo pusho nell'arrey mammiferi
for(let i = 0; i < animali.length; i++){
    const animal = animali[i]
    if(animal.classe === 'mammiferi'){
        mammiferi.push(animal)
    }
}

console.log(mammiferi);