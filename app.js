const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')



// express app
const app = express()

// connect to mongobd
const dbURI = 'mongodb+srv://ama:test1234@nodetuts.jsezj.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));

// register view engine
app.set('view engine', 'ejs')

// listen for requests


// app.use((req,res,next)=>{
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path:', req.path);
//     console.log('method', req.method )
// })

// using 3rd party middlewares
app.use(express.static('public'))
app.use(morgan('dev '))




app.get('/', (req, res)=>{
    res.redirect('/blogs')
})


app.get('/about', (req,res)=>{
    res.render('about', {title: "About"})
});

 
app.get('/blogs/create', (req,res)=>{
    res.render('create', {title: 'Create a new blog'})
})



//  blog routes
app.get('/blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.render('index', {title: 'All Blogs', blogs: result});
        })
        .catch((err)=>{
            console.log(err)
        })
})
 
// 404 status

app.use((req, res)=>{
    res.status(404).render('404', {title: '404'})
});

// redirects
// app.get('/about-me', (req, res)=> {
//     res.redirect('/about');
// })





// // mongoose and mongo sandbox routes 
// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my mysel blog',
//         body: 'more about my struggles & wins blog'
//     });

//     blog.save()
//         .then( (result) => {
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });  
// })
 

// app.get('/add-blogs', (req, res) => {
//     Blog.find()
//         .then( (result) => {
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/single-blog',(req,res) => {
//     Blog.findById('62682bd3e1495fb8cb3bf84e')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })