const express=require('express')
const router=express.Router()

const ctrl=require('../controller/user.js')
router.get('/login',ctrl.loginget)
router.get('/register',ctrl.registerget)
router.post('/register',ctrl.registerpost)
router.post('/login',ctrl.loginpost)

module.exports=router