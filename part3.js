function findLongestWord(str) {
    let wordSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < wordSplit.length; i++) {
        if(wordSplit[i].length > longestWord) {
            longestWord = wordSplit[i].length
        }
    }
    return longestWord;
}
console.log(findLongestWord('Hello my name is Sabrina'));

// Space complexity: O(n)
// Time complexity: O(n)

// RUNTIME GUESS 

// EXTRA CREDIT

function findUniqueChar(str) {
    let uniqueChar = " "
    for( let i = 0; i < str.length; i++) {
        if(uniqueChar.includes(str[i]) === false ) {
            uniqueChar += str[i]
        } else {
            return false
        }
    }
    return true;
}
console.log(findUniqueChar("Monday"));
console.log(findUniqueChar("Moonday"));

// Space complexity: O(n)
// Time complexity: O(n)