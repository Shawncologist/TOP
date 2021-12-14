const reverseString = function(str) {
    console.log(str.length);
    let newString = ``;
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

// Do not edit below this line
module.exports = reverseString;
