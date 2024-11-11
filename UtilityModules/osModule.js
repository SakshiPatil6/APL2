// Require operating System module
const os = require("os");

// Display operating System type
console.log('Operating System type : ' + os.type());

// Display operating System platform
console.log('platform : ' + os.platform());

// Display total memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Display available memory
console.log('Available memory : ' + os.availmem() + " bytes.");