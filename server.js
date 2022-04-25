const http = require('http');
const fs = require('fs'); 
const _ = require('lodash');
const server = http.createServer((req,res)=>{
    
    // lodash
    const num = _.random(0, 50)
    console.log(num)

    const greet = _.once(()=>{
        console.log("hello Amaboh")
    })
    
    greet();
    greet()


    // set header content type
      res.setHeader('Content-Type', 'text/html')
    
     

     // basic routing
     let path= './views/';
     switch(req.url){
         case '/':
             path += 'index.html';
             break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
     }

    //   res.write('<head><Link rel="stylesheet" href="#"></head>')
    //   res.write('<p>Hello, my son Amaboh<p>')
    //   res.write('<p>Hello, am still with me more than ever<p>')
    //   res.end();

    // send an html file
        fs.readFile(path, (err, data) => {

            if(err){
                console.log(err);
                res.end()
            }else{
                // res.write(data)
                res.end(data); 
            }
        })

    });


server.listen( 3000, 'localhost', ()=>{
    console.log('listening for request on 3000')
})

