const net = require('net');

// Create TCP server
const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Received from client: ' + data);
        socket.write('Echo from server: ' + data);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});


const net = require('net');

// Connect to the server
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    client.write('Hello, Server!');
});

// Receive data from server
client.on('data', (data) => {
    console.log('Received from server: ' + data);
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server');
});
