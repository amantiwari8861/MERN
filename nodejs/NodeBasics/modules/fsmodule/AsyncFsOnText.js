const fs = require("fs")

const TEXT_FILE_PATH = process.env.TEXT_FILE_PATH;

const readTextFile = () => {
    fs.readFile(TEXT_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(data);
        console.log("reading from file finished!");
    });
}

const writeFile = () => {
    fs.writeFile(JSON_FILE_PATH, JSON.stringify(user), (err) => {
        if (err) throw err;
        console.log('File written successfully');
    });
}

const renameFile = () => {

}

const watchFile = () => {

}

const deleteFile = () => {

}

const appendInFile = () => {

}

exports.readTextFile = readTextFile;
exports.writeFile = writeFile;
exports.appendInFile = appendInFile;
exports.watchFile = watchFile;
exports.renameFile = renameFile;
exports.deleteFile = deleteFile;