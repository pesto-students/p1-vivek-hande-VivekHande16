console.time();

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1 );
            } else { 
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

const count = vowelCount("Pesto Curriculam");
console.log(count);

console.timeEnd();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Modified vowelCount() Function to save time and space //
console.time();

function vowelCountModified(str) {
    const vowelMap = new Map();
    [...str].forEach( char => {
        if("aeiou".includes(char)) {
            vowelMap.has(char) ? vowelMap.set(char, vowelMap.get(char) +1 ) : vowelMap.set(char, 1);
        }
    })
    console.log(vowelMap); 
}

const str = "Pesto Curriculam";
vowelCountModified(str.toLowerCase());

console.timeEnd();

/*
**** Time Complexity *****

This modified version of above function takes less time to execute than the above one.
Reasons:
    1. Earlier we were converting each char to lowercase one by one. But in modified function we are converting the whole string into lower case 
       at once as soon as we receive a string from user which saves time.
    2. Earlier we were calling the isVowel() function to check the vowel but in modied function we have removed the isVowel() function and we are checking 
       the vowel in main function itself.
    3. Earlier we were returning the vowelMap and then printing the result but in modified version we are printing the result from the same function.
*/

/* 
**** Space Complexity ***** 

Here we are not storing any duplicate values of vowels. Instead we are storing the vowel with its count which really saves the space in compare to
the approach where we store all the vowels present in string to the map.
*/