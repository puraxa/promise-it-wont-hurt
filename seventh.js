let firstPromise = first();

let secondPromise = firstPromise.then((nesto) => second(nesto));

secondPromise.then(console.log).catch();