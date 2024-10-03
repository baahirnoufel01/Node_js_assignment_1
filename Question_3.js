const repl = require('repl');

repl.start({
    prompt: 'Enter a number to check if it\'s odd or even > ',
    eval: (input) => {
        let number = parseInt(input.trim());
        if (isNaN(number)) {
            console.log('Please enter a valid number');
        } else if (number % 2 === 0) {
            console.log(`${number} is an even number`);
        } else {
            console.log(`${number} is an odd number`);
        }
    }
});
