const fs = require('fs');

// Synchronous
const readFileSyncr = () => {
    // const data = fs.readFileSync('modules/fsmodule/users.json','utf8');
    const data = fs.readFileSync('modules/fsmodule/bigdata.txt', 'utf8');
    console.log(data);
    // let users=JSON.parse(data);
    // console.log(users.name);
    console.log("finished reading the file!");
}

const writeFileSyncr = () => {

    fs.writeFileSync("modules/fsmodule/Hello.txt", "Hello Aman Sir");
    console.log("written in file!!");
}
const appendFileSyncr = () => {
    fs.appendFileSync("modules/fsmodule/Hello.txt", "Hello Aman Sir");
    console.log("appended in file!!");
}

const deleteFile=(FILE_NAME)=>{
    try {
        fs.unlinkSync(FILE_NAME);
        console.log('File deleted successfully!');
    } catch (err) {
        console.error(`Error deleting file: ${err.message}`);
    }
}


exports.readFileSyncr = readFileSyncr;
exports.writeFileSyncr = writeFileSyncr;
exports.appendFileSyncr = appendFileSyncr;
exports.deleteFileSync = deleteFile;