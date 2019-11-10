// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    if (str.length === 0 || str.length === 1) return true;
    return str.split('').every((e, i, arr) => e === arr[arr.length - 1 - i]);
    // using the every() higher order function to test each element to see if it passes the test given, if one element doesn't it'll pass a false bool value
}

module.exports = palindrome;

// if (str.length === 0 || str.length === 1) return true;
// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         return false;
//     }
// }
// return true;