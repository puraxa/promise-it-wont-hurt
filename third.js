var promise = new Promise(function (fulfill, reject) {
   setTimeout(()=> reject(new Error('REJECTED!')),300); 
});
  
  function onReject (error) {
    console.log(error.message);
  }
  
  promise.then(function(){console.log('a')},(message)=>onReject(message));
  // Your solution here