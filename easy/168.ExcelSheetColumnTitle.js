/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ""
    while (columnNumber > 0){
        columnNumber--
        let stringChar = String.fromCharCode(65+columnNumber%26)
        columnNumber = Math.floor(columnNumber/26)
        result = stringChar+result
    }
    return result
};