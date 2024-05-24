//  Arrows function 
// this tells about current context

const user={
    username:"prikshit",
    price:999,
    

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// this ka content yha bi hoga
user.welcomeMessage()
user.username="sam" // conetxt change kr diya
user.welcomeMessage();



console.log(this); // node environment me this ko empty objc hota
// browser me this => window deta



// +++++++++++++++++++++++++++++++++ //
function chai(){
    let username ="prikshit"
    console.log(this.username); // undefined => this object ke andr hota
}
// chai()



const coffee = ()=> {
    let username ="prikshit"
    console.log(this.username);
}
// coffee()
// regular func and arrow func dono me this use ni hota

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

//Implicit return . mene man liya return ni likha hoga
//curly braces me return likna hi hoga, paranthesis me ni likna hoga
// const addTwo = (num1,num2)=>  num1+num2
const addTwo = (num1,num2)=>  (num1+num2)

// return obj implicit
// const addTwo=(num1,num2)=> {(username:"prikshit")}

console.log( addTwo(1,2));


//Explicit return me return likna hoga
