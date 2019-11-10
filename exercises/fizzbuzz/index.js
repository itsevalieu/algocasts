// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {  // not a multiple of three or five, print regular number
            console.log(i);
        }
        else if (i % 3 === 0 && i % 5 === 0) { // if a multiple of three and five, print fizzbuzz
            console.log('fizzbuzz');
        } else if (i % 3 === 0) { // if a multiple of three, print fizz
            console.log('fizz');
        } else if (i % 5 === 0) { // if a multiple of five, print buzz
            console.log('buzz');
        }
    }
}

module.exports = fizzBuzz;
