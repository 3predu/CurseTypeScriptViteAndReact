let stringArr = ['one', 'hey', 'Pedro'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jhosef';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Pedro', 42, true];
let mixed = ['Jhosef', 1, false];
// myTuple = mixed - o TypeScript não permite, pois ele entende que o array mixed, pode não ter somente 3 elementos. E o que os tipos deles podem mudar. (Vai com base na posição)
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Pedro',
    prop2: true,
};
exampleObj.prop1 = 'Jhosef';
/*
Podemos usar o type também:
type Guitarist = {
    name: string,
    active?: boolean, // '?' faz o active ser opcional
    albums: (string | number)[],
}

quando devo usar qual?

interface é usada quando pensamos em uma 'classe'

*/
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarrist) => {
    return `Hello ${guitarrist.name}!`;
};
console.log(greetGuitarist(jp));
export {};
//# sourceMappingURL=lesson4.js.map