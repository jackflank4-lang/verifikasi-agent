const crypto = require('crypto');
const id = crypto.randomBytes(32).toString('hex');
console.log("Ethereum Identity Created: 0x" + id);
