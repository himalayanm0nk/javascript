const myNumbers=[1,2,3,4,5,6,7,8]

// const newnums =myNumbers.map( (num)=> num+10) // return krta
// console.log(newnums);
// chaining => using diff methods same time
// 1st chai ka result second me jaege
const newNums =myNumbers
.map((num)=> num*10)
.map((num)=> num+1).filter((num)=> num>=40)
console.log(newNums);


