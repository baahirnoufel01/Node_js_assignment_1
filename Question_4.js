const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    if (err) throw err;
    console.log('Address: %j family: IPv%s', address, family);
});


dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) throw err;
    console.log('Reverse lookup for 8.8.8.8:', hostnames);
});
