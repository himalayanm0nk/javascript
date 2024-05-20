//Arrays Dyanmic type and mix type 
const myArr = [0,1,2,3,4,5,5]
console.log(myArr[3]);
//##### Array make shallow copy
// shallow copy a copy which share same reference
//deep copy properties do not share same reference

const myHeros=["shaktiman","naagraj"]
const mysecarray= new Array(1,2,3,4)
console.log(mysecarray[1]);


//Methods
myArr.push(4)
myArr.push(49)
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(99) // push in starting
console.log(myArr);

myArr.shift()
console.log(myArr);//pop in start

console.log(myArr.includes(8)); // returns boolean value

console.log(myArr.indexOf(88));

const mynewarr=myArr.join(); // join converts the array into 
console.log(mynewarr);


//slice , splice 

console.log("A","Myarr");

console.log(myArr);
const myn1 = myArr.slice(1,3); // n1 to n2-1 (1 2) 
console.log(myn1); // 
console.log();

const myn2=myArr.splice(1,3)
console.log(myn2); // n1 to n2 (1 2 3  )

console.log(myArr);

// splice original array ko manipulate karta or splice spring remve ho jati

