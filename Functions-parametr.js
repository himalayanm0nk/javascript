//Functions => code ko package me rakh diya jha le jao use krne

//Function Definition
function sayMyName(){
    console.log("Prikshit");
}
// sayMyName function reference
sayMyName(); // function execution

function addTwoNumbers(num1 , num2){ //parameters
     console.log(num1+num2);
}

const result = addTwoNumbers(2,3) // arguments
console.log(result); // undefined cuz func is not returing anything

function LogInUserMessage(username){
    return `${username} just Logged In`
}
console.log(LogInUserMessage("Prikshit")); 
// agar kavalue hi pass ni tho undefined aega "" not


// if(!username) // username agar undefined tho , ! false ko true tho condition me jaega

