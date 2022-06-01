function compareLetters(middleChar, string){
    const length = string.length

    for(let i= middleChar- 1;  i>=0; i--){
        let mirrorCharPosition = length - 1 - i;
        
        let char = string[i]
        let mirrorChar = string[mirrorCharPosition]

        if (char !== mirrorChar){
            return false
        }
    }

    return true
}

function isPalindrome(str){
    const length = str.length
    
    middleChar = Math.floor(length/2) 
    console.log(middleChar)

    return compareLetters(middleChar, str.toUpperCase())
    
}

console.log(isPalindrome("abcdedcba"))




