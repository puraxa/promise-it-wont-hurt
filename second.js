
    'use strict';
    
    var promise = new Promise((fulfill, reject) => {
        setTimeout(function(){fulfill('FULFILLED!')},300);
    });
    
    promise.then((message)=> console.log(message));