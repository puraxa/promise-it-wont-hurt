let firstPromise = first();

let secondPromise = firstPromise.then(function(nesto){
    return second(nesto);
});

secondPromise.then(console.log);