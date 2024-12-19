//  function sayMyName(){
//     console.log("Kmi");
//  }

//  sayMyName();





// function eith loop
// function printCounting(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }

// printCounting();








// function with 1 parameter

// function printNumber(num){
//     console.log("Printoing Number:", num);
// }
// printNumber(5);






// //function with more than 1 parameterr

// function average(num1,num2){
//     let avg = (num1+num2)/2;
//     console.log(avg);

// }
// average(2,6);











// return functions

// function getSum(a,b,c){
//     let sum =a+b+c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing sum is:", ans);



// function getname(firstName,lastname){
//     let fullName = firstName +" "+lastname;
//     return fullName;
//     // unreachable statement 
//     let a = 10;
//     let b = 15; let sum = a+b;
//     console.log(sum);

// }
// let name = getname("kumi", "Gupta")
// console.log(name);




// function getname(firstName,lastname){
//     let fullName = firstName +" "+lastname;   // output 2 7
//     return fullName;
//     // unreachable statement 
//     let a = 10;
//     let b = 15; let sum = a+b;
//     console.log(sum);

// }
// let name = getname(2,7)
// console.log(name);





// // square of number

// function squarenumber(num){
//     let square = num**2;
//     return square;
// }
// let ans = squarenumber(3);
// console.log(ans);







// let squarenumber = function(num){
//     let ans = num**2;
//     return ans;
// }
// let ans = squarenumber(5);
// console.log(ans);







// function getname(firstName,lastname){
//         let fullName = firstName + lastname;    // output 9
//         return fullName;
//         // unreachable statement 
//         let a = 10;
//         let b = 15; let sum = a+b;
//         console.log(sum);
    
//     }
//     let name = getname(2,7)
//     console.log(name);







// exponential function done by 3 method of declaring the function

// // method 1
// function expfunc (x,y){
//     // let ans = x**y;
//     // return ans;
//     return ans = x**y;
// }
// // let finalans = expfunc (2,10);
// // console.log(finalans);
// //or
// console.log(expfunc(2,10));



// // method 2 
let expfunc = function(a,b){
let ans = a**b;
return ans;
}
let kumi = expfunc(2,10);
console.log(kumi);


// // method 3 arrow function
// let expfunc = (a,b)=>{
//     let ans  = a**b;
//     return ans;

// }
// console.log(expfunc(2,10));