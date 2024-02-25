// Block Scope
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
console.log(c);

// function scope

function test() {
    var x = 10;
    let y = 20;
    const z = 30;
    g = 200; // g becomes Global as its not assinged any type
}

console.log(x);
console.log(y);
console.log(z);
// console.log(window.g);

test();

// Global Scope

var p = 10;
let q = 20;
const r = 30;

{
    console.log(p);
    console.log(q);
    console.log(r);
}

function testGlobal() {
    console.log(p);
    console.log(q);
    console.log(r);
}

testGlobal();
