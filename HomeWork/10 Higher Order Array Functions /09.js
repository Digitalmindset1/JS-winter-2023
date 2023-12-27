// Short filter for string


const stringsArray = ['apple', 'banana', 'orange', 'grapes', 'kiwi', 'pear'];


function filterShortStrings(strings) {
    return strings.filter(str => str.length <= 4);
}

const shortStringsArray = filterShortStrings(stringsArray);
console.log('Short strings:', shortStringsArray);
