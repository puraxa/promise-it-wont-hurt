let promise = new Promise((resolve, reject) => resolve('PROMISE VALUE'));
promise.then(console.log,null);
// kad stavim catch verify ne radi
console.log("MAIN PROGRAM");