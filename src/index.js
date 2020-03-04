module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0 ) {
        return false;
    }

    let openBrackets = [];
    let closeBrackets = [];
    let stuck = [];
    let newStr = str;

    bracketsConfig.forEach((brackets) => {
        openBrackets.push(brackets[0]);
        closeBrackets.push(brackets[1]);
    });
    debugger;
    for (let i = 0; i < str.length; i++) {
        newStr = str.slice(i, str.length);
        if (
            closeBrackets.indexOf(str[i]) !== -1 && (closeBrackets.indexOf(str[i]) === openBrackets.indexOf(str[i])) ||
            closeBrackets.indexOf(str[i]) !== -1 && (closeBrackets.indexOf(str[i]) !== openBrackets.indexOf(str[i]))
        ) {
            if (closeBrackets.indexOf(str[i]) !== -1 && openBrackets.indexOf(str[i]) !== -1) {
                if (stuck[stuck.length - 1] !== str[i]) {
                    stuck.push(str[i]);
                    continue;
                }
            }
            let matchBrakets = openBrackets[closeBrackets.indexOf(str[i])];
            if (stuck.length === 0) {
                return false;
            }
            if (stuck.pop() !== matchBrakets) {
                return false;
            }
            continue;
        }
        stuck.push(str[i]);
    }

    return stuck.length === 0;
}
