const score=900
console.log(typeof score);

const balance =new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)) // 100.00


const otherNumber = 23.89998
console.log(otherNumber.toPrecision(2));

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN')); // come lga deta


//++++++++++Maths+++++++++++
console.log(Math); // object
console.log(Math.abs(-6)); // Absolute value 
console.log(Math.round(4.5));
console.log(Math.ceil(4.5)); // top value lega
console.log(Math.floor(4.9)); // lowest value lega
console.log(Math.min(4,5,6,7));

/// Math.random
console.log(Math.random()); // 0 to 1
console.log(Math.floor(Math.random()*10)+1);

const min= 10
const max =20

console.log(Math.floor(Math.random()*(max-min + 1))+min);

