import groupBy from 'lodash.groupby';
import { transactions } from './transactions.js';

console.log(groupBy(transactions, 'date'));