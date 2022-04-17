const { response } = require('express');
const express = require('express');

// express app
const app = express();

// listen for requests (it assumes we want to use localhost)
app.listen(3000) // returns an instance of the server

// get requests
app.get('/', (request, response) => {
    // express automatically worksout the headers for us depending on what we send back
    // also sets the status code
    //response.send('<h1>EXPRESS APP!!!</h1>')
    //send entire HTML files
    response.sendFile('./views/index.html', { root:__dirname });
});

app.get('/pedidos', (request, response) => {
    response.sendFile('./views/pedidos.html', { root:__dirname });
});

// Redirects
app.get('/pedidos-us', (request, response) => {
    response.redirect('/pedidos');
})

//when looking for a response, when one is found it won't carry on to
//the rest of the code, the 404 MUST BE AT THE BOTTOM

app.use((request, response) => {
    response.status(404).sendFile('./views/404.html', { root:__dirname })
})