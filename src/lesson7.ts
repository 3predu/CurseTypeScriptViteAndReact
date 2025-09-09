type One = string
type Two = string | number
type Three = 'Hello'

// convert to more or less specific
let a: One = 'Hello'
let b = a as Two // less specific type
let c = a as Three // More especific

let d = <One>'world'
let e = <string | number>'world' // you cannot use this in the TSX React files

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c == 'add') return a + b
    return '' + a + b
}

// be careful! TypeScript sees no problem - but a string is returned
let myVal: string = addOrConcat(2, 2, 'concat') as string

let nextVal: number = addOrConcat(2, 2, 'concat') as number

// Forced Casting
const Msg = (10 as unknown) as string

// The DOM
const myImg = document.getElementById('#img') as HTMLImageElement
myImg.src

// To not use the 'as':
const img = document.querySelector('img')
img?.src

const nextImg = <HTMLImageElement>document.getElementById('#img') // Cannot use in TSX Files.

const year = document.getElementById("year") as HTMLSpanElement
let thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datatime", thisYear)
year.textContent = thisYear





