const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname :{
         firstname :"prikshit",
         lastname :"sharma"   
        }
    }
}

// console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);


//Merge Objects

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//using assign operator
 // const obj3 = Object.assign({},obj1,obj2)
//  console.log(obj3);

 //using spread operator

 const obj3={...obj1,...obj2}
 console.log(obj3);


 //Data from database
//Array of object
 const users =[
    {
        id:23,
        name:"prikshit"
    },{},{},{},{}
 ]

users[1].id

console.log(tinderUser);

//get all keys
console.log(Object.keys(tinderUser)); // o/p datatype array so we can use loop

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// array ke anadr aray key value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true