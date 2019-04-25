let parsePromise = (json) => {
    return new Promise((resolve, reject) => {
        try{
            resolve(JSON.parse(json));
        }
        catch(error){
            reject(error);
        }
    });
}

let onReject = (error) => {
    console.log(error.message);
}

parsePromise(process.argv[2]).then(null, onReject).catch();