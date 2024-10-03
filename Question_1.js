// Blocking Code Exampl
const fs = require('fs');


const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); 

// Non-blocking Code Example
const fs = require('fs');


fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('This will print first, non-blocking execution');
