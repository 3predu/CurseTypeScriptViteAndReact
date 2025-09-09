class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang = 'Portuguease') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // Method
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const coderPedro = new Coder('Pedro', 'Rock', 24);
console.log(coderPedro.getAge());
console.log(coderPedro.name);
class WebDev extends Coder {
    computer;
    stack;
    constructor(computer, stack = 'TypeScript', name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.stack = stack;
        this.computer = computer;
        this.stack = stack;
    }
    getLang() {
        return `I Write ${this.lang}`;
    }
    getStack() {
        return `I program in ${this.stack}`;
    }
}
const webDevJhosef = new WebDev('Acer', 'Golang', 'Jhosef Matheus', 'Lofi', 23);
console.log(webDevJhosef.getLang());
console.log(webDevJhosef.stack);
const webDevPedro = new WebDev('Avell', 'C#', 'Pedro Lucca', 'Synthwave', 24);
console.log(webDevPedro.getLang());
console.log(webDevPedro.getAge());
console.log(webDevPedro.getStack());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Pedro = new Guitarist('Pedro', 'Guitar');
console.log(Pedro.play('strums'));
//////////////////////////////////////
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const peepsPedro = new Peeps('Pedro');
const peepsJhosef = new Peeps('Jhosef');
const peepsSerginho = new Peeps('Serginho');
console.log(Peeps.count);
// cada objeto que é instaciado a partir do Peeps, vai ser incrementado no count
console.log(peepsPedro.id);
console.log(peepsJhosef.id);
console.log(peepsSerginho.id);
export {};
//# sourceMappingURL=lesson8.js.map