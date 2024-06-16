const express=require('express');
const app=express();
const user=require('./routers/user')
app.use(user)
app.listen(3000,(res)=>{
 console.log(res)
})