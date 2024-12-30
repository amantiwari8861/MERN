const path = require('path');


// // console.log(path);
// // const filePath = '.';
// const filePath = 'E:/Professional Data/Ducat/MERN/nodejs/NodeBasics/index.js';

// // Current file path
// // const filePath = '/Users/username/project/file.js';

// // 1. `path.basename`: Get the last part of the path
// console.log('basename:', path.basename(filePath)); // Output: file.js

// // 2. `path.dirname`: Get the directory name of the path
// console.log('dirname:', path.dirname(filePath)); // Output: /Users/username/project

// // 3. `path.extname`: Get the file extension
// console.log('extname:', path.extname(filePath)); // Output: .js

// // 4. `path.isAbsolute`: Check if a path is absolute
// console.log('isAbsolute:', path.isAbsolute(filePath)); // Output: true

// // 5. `path.join`: Join multiple path segments
// console.log('join:', path.join('/Users', 'username', 'project', 'file.js')); 
// // Output: /Users/username/project/file.js

// // 6. `path.normalize`: Normalize a path, resolving `..` and `.`
// console.log('normalize:', path.normalize('/Users/username//project/../file.js'));
// // Output: /Users/username/file.js

// // 7. `path.parse`: Parse a path into an object
// const parsedPath = path.parse(filePath);
// console.log('parse:', parsedPath);
// /*
// Output:
// {
//   root: '/',
//   dir: '/Users/username/project',
//   base: 'file.js',
//   ext: '.js',
//   name: 'file'
// }
// */

// // 8. `path.format`: Build a path string from an object
// console.log('format:', path.format(parsedPath));
// // Output: /Users/username/project/file.js

// 9. `path.relative`: Get the relative path from one path to another
console.log('relative:', 
    path
    .relative(
    'E:/Professional Data/',
    'E:/Professional Data/Ducat/'
));
// Output: ..

// // 10. `path.resolve`: Resolve a sequence of paths into an absolute path
// console.log('resolve:', path.resolve('file.js'));
// // Output: /current/working/directory/file.js

// // 11. `path.sep`: Get the platform-specific path segment separator
// console.log('sep:', path.sep); // Output: / (on POSIX) or / (on Windows)

// // 12. `path.delimiter`: Get the platform-specific path delimiter
// console.log('delimiter:', path.delimiter); // Output: : (on POSIX) or ; (on Windows)

// // 13. `path.toNamespacedPath`: Convert path to a namespace path (Windows only)
// console.log('toNamespacedPath:', path.toNamespacedPath(filePath)); 
// // Output: //?/Users/username/project/file.js (on Windows) or the original path on POSIX

// // 14. `path.posix`: Methods for POSIX-style paths
// console.log('POSIX join:', path.posix.join('/Users', 'username', 'file.js'));
// // Output: /Users/username/file.js

// // 15. `path.win32`: Methods for Windows-style paths
// console.log('Win32 join:', path.win32.join('C://', 'Users', 'username', 'file.js'));
// // Output: C:/Users/username/file.js
