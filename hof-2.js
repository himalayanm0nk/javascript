const myObjc={
    js : 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift :'swift by apple'
}
//for in loop
for (const key in myObjc) {
    
    console.log(key); // keys aaa jati saari
    console.log(myObjc[key]);
    console.log(`${key} for shortcut is for ${myObjc[key]}`);
}

const programming =["js","rb","pb","java"]
for (const key in programming) {
    console.log(programming[key]); 
}
// for in me keys aati or for of me values
const map =new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
for (const key in map) {
    console.log(key);
}
// for in me maps iterate ni hota



