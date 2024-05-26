//DOM => Document Object Model
// diagram for dom =>
// window -> document -> html ->
// html ->2 child => 1 head 2> body // head bosy text sabh node hote
// head -> title-> text node | meta-tag -> attribute

//body-> div ->h1 | p => h1-> attribute , text node || p-> text node

////////++++++++++++++++++++++++++++++++++++++++
>>> for selecting id
document.getElementById('title')

>>for getting id from getElementById
document.getElementById('title').id

>>for getting class from getElementById
document.getElementById('title').className

>> for getting attribute
document.getElementById('title').getAttribute('class)

>> for setting attributes
document.getElementById(title).setAttribute('class','text') // it always overwrite the old values

>> for style
title.style.backgroundColor='green'

>> for getting content
1>text  Content
hiden span bi dikh jata

2> title.innerText 
jo view hota page

3> innerHTML
html tags ko support krte

>>> Document.getElementByClassName('heading')=>> gives html collection

//++++++++++++++++++++++++++
Query Selectors

1> document.querySelector(".class", #id,p) // selets first p h1 h2

>> for selecting input tags


// document.queryselectorall()
>> gives nodelist
>> for selecting use index like array a[0]

templist.foreach( (li)=>{
li.backgroundcolor='green'
})


//html collection ko convert krna hoga taki looping
Array.from(templist)
templist.foreach(()=>{
    
})