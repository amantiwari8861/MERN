// import add, { PI, greet, num } from "./MyLib.js";
// import { add,PI, greet, num } from "./MyLib.js";
import QRCode from 'qrcode'
// console.log("Hello World");
// console.log(add(10,20));
// console.log("Sum:"+add(10,20,30,40,50));
// console.log(num);
// console.log(PI);
// greet();


const generateQR = async text => {
    try {
        console.log(await QRCode.toDataURL(text))
    } catch (err) {
        console.error(err)
    }
}

generateQR("https://github.com/amantiwari8861")