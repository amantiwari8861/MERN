// JS is a single threaded programming language  
// eg.  vscode.exe -> click -> process

// setTimeout(() => {
//     console.log("after 1 sec");
// }, 1000);// 1second
// setTimeout(() => {
//     console.log("after 2 sec");
// }, 2000);// 2second
// setTimeout(() => {
//     console.log("after 2 sec new");
// }, 2500);// 2second
// setTimeout(() => {
//     console.log("after 3 sec");
// }, 3000);// 3second


// let task1=setInterval(() => {
//     console.log("Hello ");
// }, 1000);

// setTimeout(() => {
//     clearInterval(task1)
// }, 5000);


let products;
function getData() 
{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>products=data);
    console.log(products);
}

getData();
