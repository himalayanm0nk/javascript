//Datatypes how store and how access
//Primitive call by value , copy krke dete
//Non-primitive reference type


//Primtive 
//String number bigint boolean null undefined Symbol

//Non Primitve
//Array , Objects , Functions


//Symbols
const id =Symbol('123')
const id1=Symbol('123')
console.log(id===id1); //false


const heros =["shaktiman","nagraj","doga"]

let obj={
    name:"prikshit",
    age:22
}


const myFunc = function()
{
    console.log("Hello");
}
console.log(myFunc);
console.log(typeof myFunc); //function object