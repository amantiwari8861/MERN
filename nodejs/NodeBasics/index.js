// import PI from "./modules/testrequire/mylib.js";
// const mylib=require("./modules/testrequire/mylib.js");
// const PI=require("./modules/testrequire/mylib");
// const mylib=require("./modules/testrequire/mylib");
// console.log("Hello World !");



// console.log(PI);

// let {PI,add}=mylib;
// console.log(PI);
// console.log(add(10,20));

// console.log(mylib.PI);
// console.log(mylib);

// console.log(mylib.add(10,20));


// addCustomer
// removeCustomer
// updateCustomer
// deleteCustomer

// fs,os,events,path,url

// Ecommenrce 
// Chat App 
// Admin Dashboard
// Full Website with landing pages  
// CRUD or ERP or CRM

require('dotenv').config();
const { readFilePromiseBased } = require('./modules/fsmodule/AsyncFsOnJson');
// const { readFileSyncr, writeFileSyncr, appendFileSyncr, deleteFileSync } = require("./modules/fsmodule/SyncronizedFS");
// readFileSyncr()
// writeFileSyncr(); 
// appendFileSyncr();
// deleteFileSync("modules/fsmodule/Hello.txt");
// console.log(process.env.JAVA_HOME);
// console.log(process.env);
// console.log(process.env.JSON_FILE_PATH);

// const { readJsonFile, writeJsonFile, appendInJsonFile, renameJsonFile, cutPasteJsonFile, watchJsonFile, deleteJsonFile } = require('./modules/fsmodule/AsyncFsOnJson');
const { createDirectory, readDirectory, getDirStat, removeDirectory } = require('./modules/fsmodule/DirectoryOperations');

// readJsonFile();
// writeJsonFile();
// appendInJsonFile();
// renameJsonFile();
// cutPasteJsonFile();
// watchJsonFile();
// deleteJsonFile();

// createDirectory("hello");
// createDirectory("hello/hii.txt");// treated as folder
// readDirectory(".");
// getDirStat(".");
// getDirStat("./index.js");
// removeDirectory("hello")

readFilePromiseBased(process.env.JSON_FILE_PATH);