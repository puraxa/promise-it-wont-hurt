function all(pr1,pr2){
    return new Promise((resolve,reject) => {
        let counter = 0;
        let result = [];
        pr1.then(function(count){
            result[0] = count;
            counter++;
            if(counter>=2){
                resolve(result);
            }
        })
        pr2.then(function(count){
            result[1] = count;
            counter++;
            if(counter>=2){
                resolve(result);
            }
        })
    })
}

all(getPromise1(),getPromise2()).then(console.log);