// for each loop
const coding =["java","python","ruby","cpp"]
// coding.forEach( function (val){ // functiion ka nam hata do
//     console.log(val);
// } )

coding.forEach( (item)=>{
    console.log(item);
}  )

function printMe(item){
    console.log(item);
}coding.forEach(printMe)


// sirf item ni atta for each me
coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

//array me objects

const mycoding =[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"c++",
        languagefilename:"cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagefilename);
})
