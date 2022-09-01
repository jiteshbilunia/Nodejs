
// os module methods
const os = require('os');
const user = os.userInfo();
console.log(user);
const curros = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(curros)