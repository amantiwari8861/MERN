
const uname="Aman";
let lname;
uname="xyz";
console.log("Hello world");
try { // suspicious code 
    uname="Tiwari";
     lname="Tiwari";
     console.log(lname);
} 
catch (err) 
{
    console.log("you can't assign a constant variable ");
    // console.log(err);
}
finally
{
    console.log("i will run always ");
}

console.log("Name = "+uname);
console.log("i will not execute if any Error occurs");
console.log("i will not execute if any Error occurs");
console.log("i will not execute if any Error occurs");
console.log("i will not execute if any Error occurs");
console.log("i will not execute if any Error occurs");
console.log("i will not execute if any Error occurs");