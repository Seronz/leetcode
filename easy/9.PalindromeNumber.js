var isPalindrome = function(x) {
    let reverseString = String(x).split("").reverse().join("")
    if (reverseString == x ){
        return true
    }
    return false
};