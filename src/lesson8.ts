class Coder {

    constructor(public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Portuguease'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    // Method
    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const coderPedro = new Coder('Pedro', 'Rock', 24)
console.log(coderPedro.getAge())
console.log(coderPedro.name)


class WebDev extends Coder {
    constructor(
        public computer: string,
        public stack: string = 'TypeScript',
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
        this.stack = stack
    }

    public getLang() {
        return `I Write ${this.lang}`
    }
    public getStack() {
        return `I program in ${this.stack}`
    }
}

const webDevJhosef = new WebDev('Acer', 'Golang', 'Jhosef Matheus', 'Lofi', 23)
console.log(webDevJhosef.getLang())
console.log(webDevJhosef.stack)

const webDevPedro = new WebDev('Avell', 'C#', 'Pedro Lucca', 'Synthwave', 24)
console.log(webDevPedro.getLang())
console.log(webDevPedro.getAge())
console.log(webDevPedro.getStack())
///////////////////////////////////////////////////////////

interface Musician {
    name: string
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Pedro = new Guitarist('Pedro', 'Guitar')
console.log(Pedro.play('strums'))
//////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const peepsPedro = new Peeps('Pedro')
const peepsJhosef = new Peeps('Jhosef')
const peepsSerginho = new Peeps('Serginho')

console.log(Peeps.count)

// cada objeto que é instaciado a partir do Peeps, vai ser incrementado no count

console.log(peepsPedro.id)
console.log(peepsJhosef.id)
console.log(peepsSerginho.id)