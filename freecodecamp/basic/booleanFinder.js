// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho2(bool) {
    return typeof bool === 'boolean'? true:false
}
function booWho(bool) {
    return bool === true? true: bool === false? true:false
}

console.log(booWho(null));
console.log(booWho(false));
console.log(booWho(true));
console.log(booWho(7));