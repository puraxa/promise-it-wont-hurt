let http = require('q-io/http');

http.read('http://localhost:7000')
    .then(id => http.read('http://localhost:7001/'+ id))
    .then(response => {console.log(JSON.parse(response))})
    .catch(error => {console.log(error)})