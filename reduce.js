const mynums=[1,2,3]
const myTotal = mynums.reduce((acc,currVal)=>{
    return acc+currVal
},0)
console.log(myTotal);

const shoppingCart =[
    {
        itemname:"js course",
        price:999
    },{
        itemname:"Python course",
        price:599
    },{
        itemname:"c++ course",
        price:1000
    }
]
 const bill= shoppingCart.reduce((acc,item)=>{
  return acc + item.price
},0)
console.log(bill);