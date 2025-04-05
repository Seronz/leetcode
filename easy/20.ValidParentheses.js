/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let coudron = []

    for (i= 0 ; i < s.length;i++){
        if(s[i] == "("){
            coudron.push(")")
        }else if(s[i] == "{"){
            coudron.push("}")
        }else if(s[i] == "["){
            coudron.push("]")
        }else if (coudron.pop() !== s[i]){
            return false
        }
    }
    return !coudron.length
};