

const moment=require('moment');

const conn=require('../db/db.js')


const  loginget=(req,res)=>{
    res.render('./user/login.ejs',{})
}
const  registerget=(req,res)=>{
    res.render('./user/register.ejs',{})
}

//注册页面的逻辑
const   registerpost=(req,res)=>{
    //    console.log(req.body)
         body=req.body
         //判断数据是否完整
         if(body.username.trim().length<=0 || body.password.trim().length<=0 || body.nickname.trim().length<=0) return res.send({msg:'请填写完整',status:501})
         //判断数据是否重复
         const sql1='select count(*) as count from users where username=?'
          conn.query(sql1,body.username,(err,result)=>{
              if(err) return res.send({msg:'用户注册失败',status:502})
              if(result[0].count !==0) return res.send({msg:'此用户名重复,请跟换',status:503})
              body.ctime=moment().format('YYYY-MM-DD HH:mm:ss')
            //   console.log(body.ctime)
            sql2='insert into users set ?'
            conn.query(sql2,body,(err,result)=>{
                if(err) return res.send({msg:'注册失败',status:504})
                // console.log(result)
                if(result.affectedRows !==1) return res.send({msg:'注册失败',status:505})
                res.send({msg:'注册成功',status:200})
            })
          })
    }
    //登入页面逻辑
    const   loginpost=(req,res)=>{
        // console.log(req.body)
        body=req.body
        sql='select count(*) as count from users where username=? and password=?'
        conn.query(sql,[body.username,body.password],(err,result)=>{
          if(err) return res.send({msg:'登入失败',status:501})
          console.log(result)
        if(result[0].count!==1) return res.send({msg:'此用户名不存在',status:502});
        res.send({msg:'登入成功',status:200})
        })
        
    }
    
module.exports={
    loginget,
    registerget,
    registerpost,
    loginpost
}
