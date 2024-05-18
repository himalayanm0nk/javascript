console.log("hello"+" world");

const name ="prikshit"
const repoCount=99

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String ontoplation

const gameName = new String("prikshitshm")
console.log(gameName);
console.log(typeof gameName); // object
console.log(gameName[0]);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf('i'));

const newString =gameName.substring(0,4); // 0 to 3 , 0 to n-1  -ve value ni leta
//console.log(newString);

const anotherString =gameName.slice(-1,4);
console.log(anotherString);

const newstring1="          prikshit     "
console.log(newstring1.trim());


const url ="http://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

//Convert string into array based on -(prikshit-bawa-one)
const string11="prikshit-one-bawa";
console.log(string11.split('-'));
