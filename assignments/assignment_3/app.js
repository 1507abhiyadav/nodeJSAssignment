const express = require("express");
const faker = require("faker");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());

app.set('views','./views')
app.set('view engine','ejs')
var users = []
 for (i = 0; i<5;i++){
     users.push({
         name : faker.name.findName(),
         email :  faker.internet.email(),
         age : i+24,
         city: faker.address.city(),
         profession: faker.name.jobTitle() 
     })

 }

app.get("/", (req, res) => {
    res.render('index', {users})
})
app.get("/form", (req, res) => {
    res.render('form.ejs')
})
app.post("/user/add", (req, res) => {
    users.push({
        name : req.body.name,
        age : req.body.age,
        email : req.body.email,
        city : req.body.city,
        profession : req.body.profession
    })

    res.redirect('/');


})


// app.get('/', (req, res) =>{
//     res.send('<h1>Hello World</h1>');
//  })
// //  app.get('/about',(req,res)=>{
// //      res.send(" <h1>hello , I am about page</h1>")
// //  })
// //  app.get('/content',(req,res)=>{
// //      res.send("<h1>hello I am content pages</h1>")
//  })
// //  app.get('/temp',(req,res)=>{
//      res.send({
//          id:1,
//          name :"zz",
//          age:32 
//      })
//  })

 

app.listen(3000, ()=>{ console.log("Server is running")})
