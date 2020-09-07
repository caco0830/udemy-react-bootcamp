// const square = function(x) {
//     return x*x;
// };

// // const squareArrow = (x) => {
// //     return x*x;
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(8));

const getFirstName = (s) => s.split(' ')[0];

//console.log(getFirstName('Carlo Coria'));

/*---------------------Part 2--------------------------*/

//arguments object - no longer bound with arrow functions

const add = function(a, b) {
  
    return a + b;
};

//console.log(add(55, 1));

const user = {
    name: 'Carlo',
    cities: ['Tijuana', 'San Diego', 'Chula Vista'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [1,4,5],
    multiplyBy: '2',
    multiply() {
        return this.numbers.map((n) => n * this.multiplyBy);
    }
}

console.log(multiplier.multiply());