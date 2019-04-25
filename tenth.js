let alwaysThrows = () => {
    throw new Error('OH NOES');
}

let iterate = (a) => {
    console.log(a);
    a++;
    return a;
}

let onReject = (error) => {
    console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);

