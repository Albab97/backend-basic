// server creation

// Adding http module 

const http = require('http');
const fs = require('fs');
const _=require('lodash');

const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server.');
    // console.log(req.method);
    // console.log(req.url);
    
    res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello, Jeeshu whatsup !</h1>');
    // res.write('<h1>How you doing ? </h1>');
    // res.end();

    //Lodash -> has many functions, you can read more on its website
    let num=_.random(0,100);
    console.log(num);

    let greet=_.once(()=>{
        console.log('hello');
    });
    greet();
    greet();
    // To send the files as our response we use fs module by node to read file.
    let path ='./views'
    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html'
            res.statusCode=200;
            break;
        // To redirect page '/about-me' --> '/about' 
        case '/about-me':
            res.statusCode=301; //for redirection
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='/404.html'
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            // res.write(fileData);
            res.end(fileData);
        }
    });
});

// args(port number, host, callback function)
// server listens continuously on port 3000 until stopped 
server.listen(3000, 'localhost',()=>{
    console.log('server is listening on port 3000');
});
// whenever we make changes to a server, we have to re run it, close it (Ctrl+C), save the file and rerun.