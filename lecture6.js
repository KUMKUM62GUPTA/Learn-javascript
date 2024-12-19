
// simple function ke liye only
sayMyName("kumi");
function sayMyName(fullName){
    console.log(fullName);
}
sayMyName("kumi");




// is type se function declaration pr apply nahi hota hai
// sayMyName("kumi");
// let sayMyName = function(fullName){
//     console.log(fullName);
// }
// sayMyName("kumi");



// variable hoisting
// console.log(age);
// var age = 25;


// // error
// console.log(age);
// let age = 25;



// // 
// console.log(age);// error
// const age = 25;





// class Hoisting no possible
const obj = new Human
class Human{

}
