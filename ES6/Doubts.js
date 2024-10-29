// closure


// function add(a,b) {
//     console.log("adding ",a,"and",b);
//     return a+b;
// }

// let sum=add(10,30);
// console.log(sum);
//     // or 
// console.log(add(10,20));

// let addFxn=function add(a,b) {
//     console.log("adding ",a,"and",b);
//     return a+b;
// };

// console.log(add(10,20));
// console.log(addFxn(10,20));


// // Anonymous function
// let addFxn=function (a,b) {
//     console.log("adding ",a,"and",b);
//     return a+b;
// };
// console.log(addFxn(10,20));



// Arrow function
// let addFxn= (a,b) => {
//     console.log("adding ",a,"and",b);
//     return a+b;
// };
// console.log(addFxn(10,20));


// let addFxn= (a,b) => a+b ;
// console.log(addFxn(10,20));

// setTimeout(() => {
//     console.log("Happy Dhanteras to everyone !!");
// }, 2000);// 2000 miliseconds

// let isShopOpen=true;
// let cones=5;
// function serveIceCream() 
// {
//     try {
//         if (isShopOpen) 
//         {
//             if (cones==0) 
//                 throw Error("no more cones left to serve ice-cream")
//             else
//             {
//                 cones--;      
//                 console.log("serving chocolate ice-creams ");
//             }
//         }
//     } 
//     catch (error) 
//     {
//         console.log(error);
//     }
//     finally
//     {
//         console.log("Shut the ice-cream machine ");
//     }
// }



let isShopOpen=true;
let cones=5;
function serveIceCream() 
{
    try {
        if (isShopOpen) 
        {
            try {
                if (cones==0) 
                    throw Error("no more cones left to serve ice-cream")
                else
                {
                    cones--;      
                    console.log("serving chocolate ice-creams ");
                }
            } 
            catch (error) {
                console.error(error);
            }
        }
    } 
    finally
    {
        if (!isShopOpen) {
            console.log("shop is closed pls come tomorrow");
            return;
        }
        console.log("ice-cream machine closed");
    }
}

let count=1;
let order=setInterval(() => {
    serveIceCream();
    count++;
}, count*1000);

setTimeout(() => {
    clearInterval(order);
}, 7000);