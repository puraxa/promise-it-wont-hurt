let attachTitle = (firstArg) => 'DR. ' + firstArg;

let promise = Promise.resolve('MANHATTAN');
// kad stavim catch verify ne radi
promise.then(attachTitle).then(console.log);