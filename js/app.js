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
console.log('JSnack 3');
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
const mammiferi = []    //array vuoto

//Itero l'array ed ogni oggetto con la classe 'mammiferi' lo pusho nell'arrey mammiferi
for(let i = 0; i < animali.length; i++){
    const animal = animali[i]
    if(animal.classe === 'mammiferi'){
        mammiferi.push(animal)
    }
}

console.log(mammiferi);


/*      JSnack 4 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età.
Javascript - JS
*/

console.log('JSnack 4');
//creo array di utenti
const utenti = [
    {
        nome: 'Paolo',
        cognome: 'Vadalà',
        eta: '32'
    },
    {
        nome: 'Giovanni',
        cognome: 'Patti',
        eta: '65'
    },
    {
        nome: 'Giulia',
        cognome: 'Rossi',
        eta: '15'
    },
    {
        nome: 'Cristina',
        cognome: 'Consoli',
        eta: '34'
    },
    {
        nome: 'Michele',
        cognome: 'Placido',
        eta: '15'
    },
    {
        nome: 'Lorenzo',
        cognome: 'Bianchi',
        eta: '18'
    },
    {
        nome: 'Valeria',
        cognome: 'Neri',
        eta: '45'
    },
    {
        nome: 'Vanessa',
        cognome: 'Biggi',
        eta: '14'
    },
    {
        nome: 'Vincenzo',
        cognome: 'Riva',
        eta: '19'
    },
    {
        nome: 'Antonio',
        cognome: 'Cali',
        eta: '21'
    }
]
console.log(utenti);

//creo array con frase di autorizzazione guida Ciclando l'array utenti e trasformo età in numero per poi valorizzarla
const autorizzazioneGuida = []  //array vuoto
for(let i = 0; i < utenti.length; i++){
    const users = utenti[i]
    const age = parseInt(users.eta) //number
    //verifico 
    //  SE age >= 18 allora stampo che l'utente può guidare
    //  ALTRIMENTI stampo che l'utente non può guidare
    if( age >= 18){
        autorizzazioneGuida[i] = {
            autorizzazione: `${users.nome} ${users.cognome} di anni ${age} è autorizzato alla guida in quanto ha più di 18 anni`
        }
    } else {
        autorizzazioneGuida[i] = {
            autorizzazione: `${users.nome} ${users.cognome} di anni ${age} non è autorizzato alla guida in quanto ha meno di 18 anni`
        }
    } 
}
console.log(autorizzazioneGuida)