// Jab arguments na pata ho tho
function calculateCartPrice(...num1){
         return num1;
}
console.log(calculateCartPrice(2,3,4)); 
// ... rest or spread operator 
//rest => jitna bi data hai wo khula unko bundle me kr do


const user ={
    name:"prikshit",
    price:199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

//handleObject(user);

handleObject(
    {
        user:"bawa",
        price:88
    }
)

//Passing arrays
const MyNewArray =[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(MyNewArray));