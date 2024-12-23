const fs=require("fs");

const createDirectory = (DIR_NAME) => {
    fs.mkdir(DIR_NAME, (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}
const readDirectory = (DIR_NAME) => {
    fs.readdir(DIR_NAME, (err, files) => {
        if (err) throw err;
        console.log(files);
    });
}
const removeDirectory = (DIR_NAME) => {
    fs.rmdir(DIR_NAME,  { recursive: true, force: true },(err) => {
        if (err) throw err;
        console.log('Directory deleted');
    });
    // fs.rm(DIR_NAME, { recursive: true });
    // fs.rmSync(DIR_NAME, { recursive: true, force: true });
}
const getDirStat = (DIR_NAME) => {
    // fs.stat(DIR_NAME, (err, stats) => {
    fs.stat(DIR_NAME, (err, stats) => {
        if (err) throw err;
        console.log(`File Size: ${stats.size} bytes `);
        console.log(`Is File: ${stats.isFile()}`);
        console.log(`Is Directory: ${stats.isDirectory()}`);
    });
}

exports.createDirectory = createDirectory;
exports.readDirectory = readDirectory;
exports.removeDirectory = removeDirectory;
exports.getDirStat = getDirStat;