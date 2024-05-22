//De-Structure of Object
const course={
    coursename :" JS in Hindi",
    price:"999",
    courseTeacher :"Hitesh"

}
console.log(course.courseTeacher); 
//Better

const {courseTeacher : master}=course
// console.log(courseTeacher);
console.log(master);


// const navbar =()=>{

// }
// navbar(comapny)

// {
// "name ":"prikshit",

// }