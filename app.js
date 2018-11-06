const express=require('express');
const app=express()






const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/node_modules',express.static('./node_modules'))
app.set('view engine','ejs')
app.set('views','./views')

const router1=require('./router/index.js')
const router2=require('./router/user.js')
app.use(router1)
app.use(router2)

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})

