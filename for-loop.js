//FOR-LOOP
for (let i = 1; i <10 ; i++){

    if(i==5){
        console.log("5 IS BEST NUMBER");
    }
    console.log(i);
}

for(let i=0;i<=10;i++){
   for(let j=0;j<=10;j++){
   // console.log(i + '*' + j + '=' +i*j);
   }
}

let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    }



// break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
          console.log("Detected 5");
          /* break; */ // use to break control flow
          continue;
    }
   console.log(`value of i is ${index}`);
}