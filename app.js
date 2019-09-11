const path=require('path')
const express =require('express')

//
const app =express();
const port =process.env.port || "8080";

//ejs is the view engine
app.set('view engine','ejs')
app.use('/static', express.static(path.join(__dirname, 'css')))
app.use('/static', express.static(path.join(__dirname, 'images')))


app.get('/', (req,res)=>{
  res.render('pages/index')
})


app.get('/gamax', (req,res)=>{
  res.render('gamax/gamax-index')
})

app.get('/w3', (req,res)=>{
  res.render('pages/w3')
})

app.get('/responsive', (req,res)=>{
  res.render('pages/responsive')
})

app.get('/static', (req,res)=>{
  res.send(console.log(path.join(__dirname, 'public')))
})



//about page
app.get('/about', function(req,res){
  res.render('pages/about')
})

app.listen(port,()=>{
  console.log('listening to port 8080')
})
