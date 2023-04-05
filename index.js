import { transactions } from './transactions.js';

const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
        const group = item[key];

        if (!acc[group]) acc[group] = [];

        acc[group].push(item);
        return acc;
    }, {});
}

console.log(groupBy(transactions, 'date'));