import _ from 'lodash';

// let names: string[];
let names: Array<string | number>; // generic array type (a type connected to another type)
let favoriteActivities: (string | number)[];
favoriteActivities = ['Sports', 1, 'lol', 4];

console.log(favoriteActivities);

console.log(_.shuffle([1, 2, 3, 4, 5]));
