const mysql=require('mysql')
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'my001'
})

module.exports=conn