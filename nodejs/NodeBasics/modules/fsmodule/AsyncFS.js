const fs=require("fs")

const JSON_FILE_PATH=process.env.JSON_FILE_PATH;
const TEXT_FILE_PATH=process.env.TEXT_FILE_PATH;

let testVar=()=>{
    console.log(JSON_FILE_PATH);
    console.log(TEXT_FILE_PATH);
}

exports.testVar=testVar;
// let user = {
//     name: "Aman Tiwari",
//     age: 25,
//     skills: ["MEAN", "MERN", "JAVA FSD", "etc"]
// }

// Asynchronous
// fs.writeFile('fs/users.json', JSON.stringify(user), (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// });

// fs.readFile('fs/users.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     let newUser=JSON.parse(data);
//     console.log(newUser);
//     console.log(typeof newUser);
// });

// const readFile=()=>{
//     try {
//         // fs.readFile('fs/users.json', 'utf8', (err, data) => {
//         fs.readFile('fs/bigdata.txt', 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         });
//     }
//     catch (error) {
//         console.log("Error Occured : " + error);
//     }
//     console.log("reading from file finished!");
// }

// const writeFile=()=>{
    
// }

// const renameFile=()=>{
    
// }

// const watchFile=()=>{
    
// }

// const deleteFile=()=>{
    
// }

// const appendInFile=()=>{
    
// }



// exports.readFile=readFile;
// exports.writeFile=writeFile;
// exports.appendInFile=appendInFile;
// exports.watchFile=watchFile;
// exports.renameFile=renameFile;
// exports.deleteFile=deleteFile;
