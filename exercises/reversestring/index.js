// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (char of str) {
        console.log('char', char);
        reversed = char + reversed;
    }
    return reversed;
}

reverse('kitty');
module.exports = reverse;

// return str.split('').reverse().join('');

// let reversed = '';
// for (char in str) {
//     console.log('char', str[char]);
//     reversed = str[char] + reversed;
// }
// return reversed;

// return str.split('').reduce((reversed, char) => {
//     debugger;
//     return char + reversed;
// });