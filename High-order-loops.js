// FOR-OF LOOP

["","",""]

[{},{},{}]

// for of
const arr =[1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}

const greeting ="Hello World!"
for (const greet of greeting) {
    if(greet==" "){
        break;
    }
    console.log(`Each char is ${greet}`);
}
//Maps => unique values , obj that hold key value pair ,ORDER=> JISME ADD HOTE

const map =new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
console.log(map);
for (const [key,value] of map) {
    console.log(key,value);
}

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

//for of se objectect ietratable ni hota
for (const [key,value] of myObject) {
    console.log(key,value);
}

