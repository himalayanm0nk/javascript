//2 types to declare
// singleton => 1>made by constructor / apni tarah ka ek eleemnt
//2> Literal => not singelton

//Literals
// Object.create() => by constuctor
//In object we can declare our own keys 

const mySym =Symbol("key1")
const JsUser ={
"full name" : "Prikshit sharma",
age : 18,
location :"Kangra",
email :"Prikshit@gmail.com",
isLoggedIn: false,
LastLogginDay:["Monday","Tuesday"],
[mySym]:"mykey1"
}

console.log(JsUser.email)
console.log(JsUser["email"]); // string ki tarah access krte
console.log(JsUser["full name"]);
console.log( typeof JsUser[mySym]);




JsUser.email="prikshit@chatgpt.com"
// Object.freeze(JsUser)// cant make changes 

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting); // func ka reference aega execute ni hoga
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello js user ${this["full name"]}`);
}
console.log(JsUser.greeting2());