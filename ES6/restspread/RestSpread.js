// function sum(a,b,c) {
//     return a+b+c;
// }

// let result=sum(10,20);
// console.log("result =",result);

// function sum(a,b,...all) 
// {
//     console.log(all);
//     return a+b;
// }
// let result=sum(10,20);
// console.log("result =",result);

// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40,50,60,70));

// function sum(a,b,c=56) 
// {
//     console.log("c="+c);
//     return a+b+c;
// }

// console.log(sum(10,20));
// console.log(sum(10,20,30));

// function sum(a,b,...all,c=56) 
// {
//     return a+b+c;
// }

// Math.max()

// let name2="Aman";
// let characters=[...name2]; // spread 

// console.log(characters);
// console.table(characters);

let fruits=["Apple","mango","papaya"];
let vegetables=["potato","tomato","onion"]

// let eatableItems=fruits.concat(vegetables);
// let eatableItems=["chocolate",...fruits,
//     "guava",...vegetables];
// console.log(eatableItems);

// let user={
//     name:"Aman",
//     age:27,
//     mobileNo:8448179216
// };
// let car={
//     carname:"Bugati",
//     carprice:99999999999999
// };
// // let newData=[...user];
// let newData={...user,...car};
// console.log(newData);

let variable="age";
let mobile="iphone";
let emp={};
emp.name="Aman";
emp[variable]=27;
emp["mobile"]=8448179216;
console.log(emp);



