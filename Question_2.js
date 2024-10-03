const fs = require('fs');

fs.writeFile('example.txt', 'This is a sample file.', (err) => {
    if (err) throw err;
    console.log('File created and written to!');
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Contents: ', data);
        fs.unlink('example.txt', (err) => {
            if (err) throw err;
            console.log('File deleted successfully');
        });
    });
});
