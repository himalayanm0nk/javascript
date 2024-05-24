//IIFE => immediately Invoked Function Expressions
// gloabl scope se pollution na ho , immedately invokr

(function chai(){
    console.log('DB CONNECTED');
})();
// (function)(execution)
// iiefe k badh ; to end
(function bawa(){
console.log('db two'); // name iiefe
})();

((name)=>{
console.log(`db 3 ${name}`); // unnamed effie
})('prikshit');

((naam)=>{
   console.log(`${naam} JUST LOGGED-IN`);
})('bawa')



