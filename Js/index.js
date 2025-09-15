// // console.log{"Hello World"};
// let a = 50;
// let b = 20;
// console.log(a + b);
// if (a > b) {
//     console.log("A is greater than B");
// }
// const data=(msg) => {
//     console.log("Arrow function called "+msg);
// }
// data("hello");
 /////IIFE
//  (function(){
//     console.log("Welcome to IIFE");
//  })();
// setTimeout(() => {
//     console.log("Welcome to setTimeout");
// }, 1000);
function selectlanguage(lang){
let result;
if(lang=='js'){
    function jsCompiler(){
        return " Using JS Compiler"
    }
    result = jsCompiler();
}
else if (lang=='java'){
    function javaCompiler(){
        return " Using Java Compiler"
    }


result = javaCompiler();
} 
else if (lang=='c'){
    function cCompiler(){
        return " Using c Compiler"
    }
    result = cCompiler();
}
else{
    result = "No compiler found";       
}
return result;
}
function display(lang){
    let message = selectlanguage(lang);
    console.log(message);
}
display('js');