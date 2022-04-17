const http = require('http');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const randNum = _.random(10, 30);

//This callback function will always run when theres
//a request to the server
const server = http.createServer((request, response) => {
    console.log('request made');
    //console.log(request); // contains headers and metadata + more!
    console.log(request.url, request.method);

    let path = '../Frontend/02 HTML/';

    //SIMPLE ROUTING
    switch(request.url){
        case '/':
            path += 'index.html';
            break;
        case '/pedidos':
            path += 'pedidos.html';
            break;
        case '/pedidos-me':
            response.statusCode = 301;
            path += 'pedidos.html';
            response.setHeader('Location', '/pedidos');
            response.end();
            break;
        default:
            path += '404.html';
            break;
    }
    //set headers
    response.setHeader('Content-Type', 'text/html');
    //send an html file by reading html file (without css)
    fs.readFile(path, (error, data) => {
        if(error){
            console.log('ERROR', error);
            response.end();
        }else{
            response.end(data);//data can go in here only if you have one thing to send
        }
    })
});
//localhost is like a domain name
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});