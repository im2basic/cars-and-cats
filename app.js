const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars") {
        fs.readFile('cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/cats") {
        fs.readFile('cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat.gif') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.gif', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/cars/new") {
        fs.readFile('carcat.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(5000);
console.log("listening on port 6789");