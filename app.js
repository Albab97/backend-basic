const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('hello');
    res.sendFile('C:/Users/HP/Documents/backend-basic/views/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
})

// redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//404
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})
//app.use function is used once all the routes are checked from top to bottom. If the req route is matched with any of the above app.get functions
// then it sends the response otherwise, at last it uses app.use.Thats why it is kept at last, if we keep app.use at the top , then for every route app.use will work which is not desirable.
