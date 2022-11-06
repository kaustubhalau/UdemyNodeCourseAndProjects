import fs from "fs";
import http from "http";
import url from "url"; // for getting the url on console

//This code is only going to read once and we want the nodejs to read it without moving forward thats why we use sync
const data = fs.readFileSync('../dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);   // parse data into javaScript


const server = http.createServer((req,res) => {
    console.log(req.url);


    /***********Routing******** */
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end("This is overview");
    }else if (pathName === '/product'){
        res.end("This is the Product");
    }else if(pathName === '/api'){
        res.writeHead(200, {'content-type':'application/json'});
        res.end(data);
        
    }else{
        res.writeHead(400 ,{
            'Content-type': 'text/html'  // browser will now expect the html
        });   // send error statement
        res.end("<h1>This page could not be found</h1>");
    }
    // console.log(req);
    // res.end('Hello from the server');
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})