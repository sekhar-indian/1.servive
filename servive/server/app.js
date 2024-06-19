const express=require('express');
const app=express();
const user=require('./routers/user');
const sequelize = require('./models/products');
const athontecationData=require('./models/antnaticationdata')


app.use(user)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


athontecationData.sync()
.then(res=>{
    console.log('athontecationData ok')
})
.catch(res=>{
    console.log('athontecationData not ok')
})
sequelize.sync()
.then(r=>{
    console.log('ok')
})
.catch(e=>{
    res.send('no')
}) 

app.listen(3000,(res)=>{
 console.log(res)
})