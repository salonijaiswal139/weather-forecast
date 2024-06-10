//alert("hi")
// let const var
// const PI=3.
// let myName="saloni";
// console.log(myName);
// const myAge=33.5;
// console.log(myAge);
// const productDetail = false;
// console.log(typeof productDetail);
// const productDetail =[];
// console.log(typeof productDetail);
// const productPrice = 34;
// let productDescription = `this is a product description and price is ${productPrice}`;
// console.log(productDescription);
// const age1=34;
// const age2=34;
// console.log(age1>age2);
// console.log(age1===age2);
// console.log(age1==age2);
// const productPrice =[45,34,23,67,23];//as its not typesafe language we can also add string, bool in array
// console.log(productPrice);
// const productPrice =[45,34,23,67,23,'hi',true];//as its not typesafe language we can also add string, bool in array
// console.log(productPrice);
// function myfunction(){
//     console.log("this is my function");
// }
// myfunction();
// myfunction();
// myfunction();
// function myfunction(age,name){
//     console.log(age,name);
// }
// myfunction(26,'saloni');
// function myfunction(age=0,name='null'){
//     console.log(age,name);
// }
// myfunction(26,'saloni');
// myfunction();
// function myfunction(age=0,name='null'){
//     console.log([age,name]);
//     return([age,name]);
// }
// // const data = myfunction(25,'golu');//we can write in both way
// console.log(  myfunction(25,'golu'));

// ()=>{}

// function myfunction(age=0,name='null')=>{
//     console.log([age,name]);
//     return([age,name]);
// }
// // const data = myfunction(25,'golu');//we can write in both way
// console.log(  myfunction(25,'golu'));

// const myfunction = ()=>{
//     console.log("hello world");
// };
// myfunction("hi");

// const myfunction = (data)=>{
//     console.log("data");
// };
// myfunction("hi");

// const myfunction = data=>data;
//     ;
// console.log(myfunction("hi"));

// const myfunction = num => num*num;
// console.log(myfunction(5));//in curly  braces case we have to use return type



// const age = 25;
// if(age > 20){
//     console.log("you are old");
// }


// const age = 12;
// if(age > 20){
//     console.log("you are old");
// }else{
//     console.log("you are not old")
// }

// //switch case
// switch(1){
//     case 1:
//         console.log("one");
//         //break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:

// }


// //for loop
// for(i=0;i<10;i++){
//     console.log(i);
// }

// //while loop
// let j=0;
// while(j<10){
//     console.log(j);
//     j++;
// }

// do{}
// while(j<10)

//array

// const arr = [9,8,76,43];//a fun inside a object known as method

// console.log(arr.length);
// arr.forEach((item)=>{ // modern method use this one sujjested by sir
//     console.log(item);
// });

// for(let i=0; i<arr.length; i++){//old method
//     console.log(arr[i]);
// }


// function test(cb){
//     cb();
// }
// test(()=>{});

// const arr = [9,8,76,43];//a fun inside a object known as method

// // console.log(arr.length);//old metod
// arr.forEach((item , i)=>{
//     console.log(item * 3);
//     console.log(i)
// });


//call back receive


// const arr =[9,8,76,43];
// const data =  arr.find((item)=>{
    // console.log(item);
    // if(item>50)
    // return item > 50;
// });

// console.log(data);


// const arr =[9,8,76,43];

// const numbers = [1,2,3,4,5];
// const foundNumber = numbers.find((num) => num > 3);
// console.log(foundNumber);




// const arr=[9,8,76,43]
// const filteredarr=arr.filter((items)=>{
//     console.log(items); 
//     return items>50;
// });
// console.log(filteredarr);

// const totalPrice = arr.reduce((acc,crr)=>{
//     return acc + crr;
// },0);
// console.log(totalPrice);



// const arr=[9,8,76,43]
// const totalPrice = arr.reduce((acc,crr)=>{
//     return acc * crr;
// },0);
// console.log(totalPrice);


//some()
// const items = [9,8,76,43];
// const data = items.some((item)=>{
//     return item > 100
// });
// console.log(data);

//every()
// const temperature = [85,88,92,87,89];
// const exceedsNinety = temperature.every(())


//sort()
// const items=[1,11,12,25,43,76,8,9];
// sorteditems = items.sort();
// console.log(sorteditems);

// const items=[1,11,12,25,43,76,8,9];
// sorteditems = items.sort((a,b)=>b-a);
// console.log(sorteditems);


//what are the object in javascript//without create class we can create objects this is the benefits of js

//identity of the object

// const user = {
//     fname:"saloni",
//     lname:"jaiswal",
//     age:25,
//     address:{
//         city:"noida",
//         state:"up"
//     }
// };
// console.log(user);



// const user = {
//     fname:"saloni",
//     lname:"jaiswal",
//     age:25,
//     address:{
//         city:"noida",
//         state:"up"
//     },
//     fullName:function(){
//         return this.fname + " " + this.lname;
//     }
// };
// console.log(user);
// console.log(user.fname);
// console.log(user.fullName);
// user.lname="update";
// user.mname = "any";``
// console.log(user);

// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     console.log("clicked");
// });




// const btn = document.getElementById("btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("clicked");
// });


//interview question what is dom(dom tree)
//note-browser creates domtree
//dom manupulation
//dom(document object model)=browser to parsing(html page)and create dom tree is printed in the browser.
//with the help of js we create do tree and manipulate our data on browser without affecting the html page.
//java script is easy we can directly interact with data.
//light weight informatin is called cookie for examle cancel , okay.
//two type dom=1. actual dom,2.virtual dom
//dom-two work 1 grabe the element 2.perform some action-manipulation,modify




// const btn = document.getElementById("btn");
// console.log(btn);
// const text= btn.innerText ="dont click me";
// console.log("text");




// const ele = document.getElementsByClassName("one");
// console.log(ele);




// const ele = document.getElementsByClassName("one");
// console.log(ele[1]);




// const ele = document.querySelector(".one");
// console.log(ele);


// const ele = document.querySelectorAll(".one");
// console.log(ele);



//type script cover yourself



// const ele = document.querySelector("#btn");
// console.log(ele);




//home work event bubbling it is the imp point of view interview questions.


// const anchor = document.getElementById("link");
// anchor.setAttribute("href","http://www.google.com");




// const anchor = document.getElementById("test");
// anchor.setAttribute("class","xyz");



// const anchor = document.getElementById("test");
// console.log(anchor.classList.add("zyx"));
// console.log(anchor.classList);



// const anchor = document.getElementById("test");
// anchor.classList.add("zyx");
// anchor.classList.remove("one");
// console.log(anchor.classList);



// const div = document.getElementById("div");
// let mypra = document.createElement("p");
// mypra.textContent = "This is my new paragraph generate using javascript";
// console.log(mypra);




// const div = document.getElementById("div");
// let mypra = document.createElement("p");
// mypra.textContent = "This is my new paragraph generate using javascript.";
// div.appendChild(mypra);
// console.log(mypra);





// const btn  = document.getElementById("btn");
// btn.addEventListener("click",(e)=>{
//     console.log(e);
//     console.log("button clicked")
// });



// const btn  = document.getElementById("btn");
// btn.addEventListener("click",(e)=>{
//     console.log(e.target);
//     console.log("button clicked")
// });



const btn  = document.getElementById("btn");//whenever events  happen ,
const div = document.getElementById("div");
btn.addEventListener("click",(e)=>{
    // e.stopPropagation();//for stop bubbling
    console.log(e.target);
    console.log("button clicked")
});

div.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log("div button clicked");
});    