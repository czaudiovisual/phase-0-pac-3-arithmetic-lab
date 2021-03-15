function add(a, b) {
    return a += b;
}

function subtract(a, b) {
    return a-= b;
}

function multiply(a, b) {
    return a*= b;
}

function divide(a, b) {
    return a/= b;
}

function increment(n) {
    return ++n ;
}

function decrement(n) {
    return --n ;
}

function makeInt(n, base = "10") { 
    return parseInt(n, base);
}

function preserveDecimal(n = 2.222) {
    return parseFloat(n);
}

