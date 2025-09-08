// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArr = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean, // '?' faz o active ser opcional
    albums: stringOrNumberArr,
}

type UserId = stringOrNumber

// Literal types

let myName: 'Pedro'

let userName: 'Pedro' | 'John' | 'Rafael'