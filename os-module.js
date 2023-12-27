const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)