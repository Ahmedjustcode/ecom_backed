const express = require('express')
const path = require('path')
const app = express()


app.use(express.static("public"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/products',(req,res,next) =>{

})
app.use('/images', express.static(path.join(__dirname, 'public')))


app.use((req,res,next) =>{
res.status(404)
res.send('page not found');
})

app.listen(3000,()=> {
    console.log('server started');
})


