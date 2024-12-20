const fs = require("fs")

const JSON_FILE_PATH = process.env.JSON_FILE_PATH;

let user = {
    name: "Aman Tiwari",
    age: 25,
    skills: ["MEAN", "MERN", "JAVA FSD", "etc"]
}
const readJsonFile = () => {
    fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(data);
        let usersArr = JSON.parse(data).users;
        console.log(typeof usersArr);
        console.log(usersArr[0].name);
        console.log(usersArr[0].mobileNo);
        console.log("json file succesfully read!");
    });
}
const writeJsonFile = () => {
    fs.writeFile(JSON_FILE_PATH, JSON.stringify(user), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully');
        }
    });
}
const appendInJsonFile = () => {
    fs.appendFile(JSON_FILE_PATH, JSON.stringify(user), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('appended in file succesfully!');
        }
    });
}

const postObject = () => {
/*
    read all data parse the push new object write in file 
*/
}


const renameJsonFile = () => {

}
const watchJsonFile = () => {

}
const deleteJsonFile = () => {

}
exports.readJsonFile = readJsonFile;
exports.writeJsonFile = writeJsonFile;
exports.appendInJsonFile = appendInJsonFile;
exports.watchJsonFile = watchJsonFile;
exports.renameJsonFile = renameJsonFile;
exports.deleteJsonFile = deleteJsonFile;