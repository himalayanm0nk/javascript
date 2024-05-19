// Dates
let Mydate =new Date()
console.log(Mydate.toString());
console.log(Mydate.toDateString()); // only dates
console.log(Mydate.toISOString());
console.log(Mydate.toJSON());
console.log(Mydate.toLocaleString());

console.log(typeof Mydate); //Object

// Declare Specific date

let myCreateDate =new Date(2023,0,3) // year month date
console.log(myCreateDate.toDateString());


let timestamp =Date.now();
// console.log(timestamp);
// console.log(myCreateDate.getTime());


console.log(Math.floor(Date.now()/1000)); // Millisecond ko second me convert *********


///#########################


let newDate= new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());


