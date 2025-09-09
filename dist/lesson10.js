// Index Signatures - Objects
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions['Books']);
console.log(todaysTransactions['Job']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
// Using the Method .reduce()
const todaysNetWithReduce = (transactions) => {
    return Object.values(transactions).reduce((sum, current) => sum + current, 0);
};
console.log(todaysNetWithReduce(todaysTransactions)); // print 35
export {};
//# sourceMappingURL=lesson10.js.map