// closures : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.



// function calculator() 
// {
//     let company="CASIO";
//     function add(num1,num2)
//     {
//         console.log(`adding ${num1} and ${num2} with ${company}'s calculator`);
//     }
//     add(10,20);
//     return company;
// }

// console.log(calculator());

// let num=99;
// {
//     let num=10;
//     console.log("num="+num+" in block scope");
// }
// console.log("num="+num+" in outer scope");


function calculator() 
{
    let company="CASIO";
    function add(num1,num2)
    {
        console.log(`adding ${num1} and ${num2} with ${company}'s calculator`);
    }
    return add;
}
let sum=calculator();
sum(10,20);