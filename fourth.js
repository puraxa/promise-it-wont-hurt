let promise = new Promise((resolve,reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
    console.log(error.message);
}

promise.then((message)=>console.log(message), onReject);