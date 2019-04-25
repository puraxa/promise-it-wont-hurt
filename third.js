var promise = new Promise(function (fulfill, reject) {
   setTimeout(()=> reject(new Error('REJECTED!')),300); 
});
  
let onReject = (error) => console.log(error.message);

  
promise.then(() => {console.log('a')},(message)=>onReject(message)).catch();