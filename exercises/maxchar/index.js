// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxChar = '';
    // let max = 0;
    const charMap = {};

    for (let char of str) {
        console.log(char);
        if (charMap[char]) {
            charMap[char]++;
            console.log('var', charMap[char]);
        } else {
            charMap[char] = 1;
        }
    }
    const sortedArray = [];
    for (let char in charMap) {
        sortedArray.push([char, charMap[char]]);
    }
    sortedArray.sort((a, b) => b[1] - a[1]);
    maxChar = sortedArray[0][0];

    // for (let char in charMap) {
    //     if (charMap[char] > max) {
    //         max = charMap[char];
    //         maxChar = char;
    //     }
    // }
    return maxChar;
}


module.exports = maxChar;


// basically what I want to do is create a list/dict/arr of chars and increment each char as I parse through the string if there is a recurring char.
// I can do this via a hashmap essentially, setting the char as the key, and the property is the amount of times it appears in the string. 

//two ways I can find the maxChar from the hashMap; one, I can for loop through and check each one from the previous value and reset the maxChar to the highest
// the other way is to sort the object as an array using .sort() in descending order and grab the first index since it'll be the highest maxChar