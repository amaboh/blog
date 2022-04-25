const fs = require('fs')

// reading files
fs.readFile('./docs/blog1.txt', (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString())
});

console.log('last line')

//writing files

// fs.writeFile('./docs/blog1.txt', 'hello Ama, Jesus loves you', ()=>{
//     console.log('file was successfully written')
// })

// fs.writeFile('./docs/blog2', 'Jesus Christ is King', ()=>{
//     console.log('file was successfully written')
// })

// directories 
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }console.log('folder created')
    });
} else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting files

if(fs.existsSync('./docs/deletefile.txt')){
    fs.unlink('./docs/deletefile.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}else{
    fs.writeFile('./docs/deletefile.txt', 'hello Ama Jesus loves u', (err)=>{
        if(err){
            console.log(err)
        }console.log("file created")
    })
}



















 
