// const coding =["c++","python","java","ruby"]

// const values = coding.forEach((item)=>{
// console.log(item);
// })
// console.log(values); // undefined
// for each value return ni krta => store ni kar skte kisi variable me

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNumbers.filter((num)=>{ // ese bi likh skte => num>4
//    return  num>4
// })
// console.log(newNums);

const newNums =[]

myNumbers.forEach( (num)=>{
if(num>4){
    newNums.push(num);
}
})
console.log(newNums);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++





const books =[
    {title:'Book five', genre:'science',publish:2009,edition :2004},
    {title:'book six', genre:'fiction',publish:1987, edition :2010},
    {title:'book seven', genre:'history',publish:1997, edition :2020},
    {title:'book eight', genre:'non-fiction',publish:1887, edition :2000}
]

// const userBooks =books.filter( (bk)=> bk.genre === 'history')

const userBooks=books.filter((bk)=> bk.publish >=2000 && bk.genre=='science')
console.log(userBooks);