// // normal array creation
// let arr = [1,2,3,4,5];
// console.log(arr)


// // array creation through constructor
// let brr =   new Array('Love',1,true);
// console.log(brr);



// // check type of array
// console.log(typeof(arr));
// console.log(typeof(brr));



// accesig value through index
// let brr =   new Array('Love',1,true);
// console.log(brr);
// console.log(brr[0]);





//push
// let brr =   new Array('Love',1,true);
// brr.push("babbar")
// brr.pop();
// brr.shift();
// brr.unshift("kumi");
// console.log(brr.slice(1,2));
// console.log(brr);



// //splie
// let brr =   new Array("Love babbar", 1, true, 20, 40, 70);
// //brr.splice(1,2,'kunal');
// brr.splice(1,0,kunal);
// console.log(brr);



// // map
// let arr = [10,20,30];
//1
// arr.map((number) => {
//     console.log(number+1);
// })

//2
// arr.map((number,index) => {
//     console.log(number+1);
//     console.log(inndex+2);
// })

// //3
// // let ansArray = arr.map((number) => {
// //     return number*number;
// // })
// console.log(ansArray);







// filter
// let arr = [10,20,30,11,21,44,51];
// let evenArray = arr.filter((number)=>{
//     return number%2 === 0;

// //   if(number%2 == 0){
// //     return true;
// //   }else{
// //     return false;
// //   }
// }
// );

// console.log(evenArray);




// let arr = [1,2,'love','kunal',null];

//  let kumi = arr.filter((value) =>{
//     if(typeof(value) === 'string'){
//         return true;
//     }else{
//         return false;
//     }

// }
// );
// console.log(kumi);




// // reduce
// let arr = [10,20,30,40];
//   let ans = arr.reduce((acc,curr) =>{
//   return acc + curr;
// }, 0);
// console.log(ans);





// // sort
// let arr =[9,1,2,7,4,2,8];
// //arr.sort();
//  let ans = arr.sort((a,b)=>b-a);
// console.log(ans);








// indexOf

// let arr =[9,1,7,4,2,8];
// console.log(arr.indexOf(9))



// forEach
// let arr = [10,20,30];
// arr.forEach((value,index) =>{
// console.log("Number :", value,"Index:",index);
// });
// traditional method of solving this type problem
// let arr = [10,20,30];

// let length = arr.length;
// console.log("Length:",length);

// for(let index = 0;index< length;index++){
//     console.log(arr[index]);
// }





// for In
// let obj = {
//     name:"Love",
//     age:25,
//     weight:85,
//     greet : function(){
//         console.log("Hello jee kese ho");
//     }
// };

// for(let key in obj){
//     console.log(key,obj[key]);
// }





// for of
// let arr = [20,10,30,40];
// for(let value of arr){
//     console.log(value);
// }


// let fullName = "Kmkum Gupta";
// for(let val of fullName){
//     console.log(val);
// }













// arrys with function

// let arr = [10,20,30,40,50];
// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index =0; index<len;index++){
//         sum = sum+arr[index];
// }
// return sum;
// }


// let totalSum = getSum(arr);
// console.log(totalSum);

       // or

       
let arr = [10,20,30,40,50];
function getSum(arr){
    
    let sum = 0;
    arr.forEach((value)=>{
        sum = sum+value;
    })
return sum;
}


let totalSum = getSum(arr);
console.log(totalSum);











