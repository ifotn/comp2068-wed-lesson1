/**
 * Created by RFreeman on 9/7/2016.
 */
// link to node's filesystem library
var fs = require('fs');

// open & read food list
var food = fs.readFileSync('food.txt', 'utf8');

// print food list
console.log('FOOD:')
console.log(food);

// open & read drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf8');

// print drinks list
console.log('DRINKS:');
console.log(drinks);
