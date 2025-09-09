// convert to more or less specific
let a = 'Hello';
let b = a; // less specific type
let c = a; // More especific
let d = 'world';
let e = 'world'; // you cannot use this in the TSX React files
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
// be careful! TypeScript sees no problem - but a string is returned
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat');
// Forced Casting
const Msg = 10;
// The DOM
const myImg = document.getElementById('#img');
myImg.src;
// To not use the 'as':
const img = document.querySelector('img');
img?.src;
const nextImg = document.getElementById('#img'); // Cannot use in TSX Files.
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datatime", thisYear);
year.textContent = thisYear;
export {};
//# sourceMappingURL=lesson7.js.map