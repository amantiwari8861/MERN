function add(a,b,...others) {
    let sum=a+b;
    others.forEach(e => {
        sum+=e;
    });
    return sum;
}
let greet=()=>console.log("Hello world");
let num=55;
const PI=3.14;

export default add;
// export default add,num; //error
export {greet,num,PI}