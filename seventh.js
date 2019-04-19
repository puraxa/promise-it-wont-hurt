let firstPromise = first();

let secondPromise = firstPromise.then((nesto) => {
    return second(nesto);
});

secondPromise.then(console.log);