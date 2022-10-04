import _ from 'lodash';
import { myLog } from './testFunction';
import './css/app.css';
import './css/style.css';

// let names: string[];
let names: Array<string | number>; // generic array type (a type connected to another type)
let favoriteActivities: (string | number)[];
favoriteActivities = ['Sports', 1, 'lol', 4];

console.log(favoriteActivities);

console.log(_.shuffle([1, 2, 3, 4, 5]));

const response = await fetch('https://api.chucknorris.io/jokes/random');
const data = await response.json();
console.log(data.value);

console.log(myLog('hello'));
console.log(myLog('hello'));
