// Index Signatures - Objects


interface TransactionObj {
    [index: string]: number
    /* 
    interface TransactionObj {
        Pizza: number,
        Books: number,
        Job: number
    }
    */
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])
console.log(todaysTransactions['Books'])
console.log(todaysTransactions['Job'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

// Using the Method .reduce()
const todaysNetWithReduce = (transactions: TransactionObj): number => {
    return Object.values(transactions).reduce((sum, current) => sum + current, 0);
}

console.log(todaysNetWithReduce(todaysTransactions)); // print 35

