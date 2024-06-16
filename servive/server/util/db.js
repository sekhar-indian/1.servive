// const db;
const mysql=require('mysql2');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1122',
    database:'servive'
})
db.getConnection((res,err)=>{
   if(res){
    console.log('err')
   }else{
    console.log('ok')
   }

})
module.exports=db.promise();