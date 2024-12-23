const fs = require('fs');
const fsPromises = require('fs/promises');

// Callback-based
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Callback:', data);
});

// Promise-based
(async () => {
    try {
        const data = await fsPromises.readFile('example.txt', 'utf8');
        console.log('Promise:', data);
    } catch (err) {
        console.error(err);
    }
})();

// So a self-invoking function is also called immediately invoked function expression (IIFE).
