// let arr=[];
// for (let i = 0; i < 10; i++) 
//     arr.push(Math.trunc(10*Math.random())+1);

// console.log(arr);

let arr=[10,20,30,40,50];
// let num1=arr[1];
// console.log(num1);

// let [...values]=arr;
// console.log(values);
// let [num1,num2]=arr;
// let [num1,num2,...values]=arr;
// console.log(num1,num2);

// let [num1,,num2,...values]=arr;//[10,20,30,40,50]
// let [num1,,,num2,...values]=arr;//[10,20,30,40,50]
// console.log(num1,num2);
// console.log(values);


// let user={
//     "id":101,
//     "name":"Aman Tiwari",
//     "age":25,
//     "skills":["C","C++","MEAN","MERN","JAVA FSD","etc"],
//     "address":{
//         "city":"gurugram",
//         "pincode":122001
//     }
// };

// console.log(user);

// let {age}=user;
// let {age,skills,id}=user;
// let {age,skills,id}=user;
// console.log(id,age,skills);

// let {address,id}=user;
// console.log(id,address);

// let {address:{city,pincode},id}=user;
// // console.log(id,address,city);
// console.log(id,city);

// let {skills}=user;
// console.log(skills);
// let {skills:[data1,data2]}=user;
// let user={
//     "id":101,
//     "name":"Aman Tiwari",
//     "age":25,
//     "skills":["C","C++","MEAN","MERN","JAVA FSD","etc"],
//     "address":{
//         "city":"gurugram",
//         "pincode":122001
//     }
// };
// let {skills:[a,,b,,c]}=user;
// console.log(a);
// console.log(b);
// console.log(c);

// function test4({name,age,...args}) 
// {
//     console.log(name,age);
//     console.log(args);
// }   
// test4(user)

let myObject={
    data:100,
    age:28,
    greet:()=>console.log("Hello world"),
    greet2:()=>console.log("Hello world 2"),
    gree3:()=>console.log("Hello world 3"),
}

let {data,greet2}=myObject;
console.log(data);
greet2()




// let questions = [
//     {
//         id: 1,
//         question: "What is the correct syntax to create a JavaScript array?",
//         choice1: "var arr = '1, 2, 3'",
//         choice2: "var arr = [1, 2, 3]",
//         choice3: "var arr = {1, 2, 3}",
//         choice4: "var arr = (1, 2, 3)",
//         answer: "var arr = [1, 2, 3]"
//     },
//     {
//         id: 2,
//         question: "Which of the following is NOT a JavaScript data type?",
//         choice1: "Number",
//         choice2: "Boolean",
//         choice3: "Float",
//         choice4: "String",
//         answer: "Float"
//     },
//     {
//         id: 3,
//         question: "Which company developed JavaScript?",
//         choice1: "Netscape",
//         choice2: "Microsoft",
//         choice3: "Google",
//         choice4: "Apple",
//         answer: "Netscape"
//     },
//     {
//         id: 4,
//         question: "How do you write 'Hello World' in an alert box?",
//         choice1: "alert('Hello World');",
//         choice2: "msg('Hello World');",
//         choice3: "msgBox('Hello World');",
//         choice4: "alertBox('Hello World');",
//         answer: "alert('Hello World');"
//     },
//     {
//         id: 5,
//         question: "What is the correct way to write a JavaScript array?",
//         choice1: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
//         choice2: "var colors = ['red', 'green', 'blue']",
//         choice3: "var colors = (1:'red', 2:'green', 3:'blue')",
//         choice4: "var colors = {'red', 'green', 'blue'}",
//         answer: "var colors = ['red', 'green', 'blue']"
//     },
//     {
//         id: 6,
//         question: "How do you find the minimum of x and y using JavaScript?",
//         choice1: "min(x, y)",
//         choice2: "Math.min(x, y)",
//         choice3: "Math.minimum(x, y)",
//         choice4: "minimum(x, y)",
//         answer: "Math.min(x, y)"
//     },
//     {
//         id: 7,
//         question: "Which operator is used to assign a value to a variable?",
//         choice1: "*",
//         choice2: "-",
//         choice3: "=",
//         choice4: "x",
//         answer: "="
//     }
// ];
