let stringArr = ['one', 'hey', 'Pedro']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'Jhosef'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Pedro', 42, true]

let mixed = ['Jhosef', 1, false]

// myTuple = mixed - o TypeScript não permite, pois ele entende que o array mixed, pode não ter somente 3 elementos. E o que os tipos deles podem mudar. (Vai com base na posição)

myTuple[1] = 42

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Pedro',
    prop2: true,
}

exampleObj.prop1 = 'Jhosef'

interface Guitarist {
    name?: string,
    active: boolean, // '?' faz o active ser opcional
    albums: (string | number)[],
}

/*
Podemos usar o type também:
type Guitarist = {
    name: string,
    active?: boolean, // '?' faz o active ser opcional
    albums: (string | number)[],
}

quando devo usar qual?

interface é usada quando pensamos em uma 'classe'. Elas são mais usadas para descrever o contrato de classes e objetos
    - Cenários como criação de bibliotecas
    - Extensão de interfaces, ótimo para estender uma interface de outra => criando hierarquias de tipos.
    - Declaração de múltiplas partes

type é mais usado para um geral. É mais versátil e podem ser usadas para criar aliases de tipos primitivos, uniões, interseções e tuplas

Característica	                            interface	type
Definição de Objeto	                            ✔️	     ✔️
Aliases de Tipos Primitivos	                    ❌	    ✔️
União de Tipos (|)	                            ❌	    ✔️
Interseção de Tipos (&)	                        ❌	    ✔️
Declaração por Múltiplas Partes (mesclar)	    ✔️	     ❌
Extensão	Usa extends	Usa & ou `

Exportar para as Planilhas


*/

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarrist: Guitarist) => {
    return `Hello ${guitarrist.name?.toUpperCase}!`
}

/*
No return, para que não ocorra do objeto ser possivelmente indefinido, o TypeScript coloca o '?', se não quisermos que seja dessa forma, podemos fazer a verifição manual, chamado de estreitamento.

const greetGuitarist = (guitarrist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarrist.name.toUpperCase}!`
    }
    return 'Hello!'
}

basicamente essa função vai verificar, se o guitarrist.name existe, ou seja, se não é null nem undefined. Caso não possua ele vai retornar apenas o 'Hello!'

No caso anterior, o TypeScript só vai alterar para "toUpperCase" (Letra maiuscula), caso a propiedade tiver um valor.


*/

console.log(greetGuitarist(jp))