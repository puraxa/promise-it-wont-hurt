let promise = Promise.resolve('Resolve');
let reject = Promise.reject('Reject');
reject.catch(console.log);