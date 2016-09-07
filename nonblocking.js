/**
 * Created by RFreeman on 9/7/2016.
 */
// link to the filesystem library
var fs = require('fs');

// load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
   console.log(food + '\n');
    console.log('DRINKS:');
});

console.log('FOOD GOES HERE:');

// load drinks asynchronously
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(drinks);
    }
});

