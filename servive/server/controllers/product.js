const db=require('../util/db')
exports.data=async (req,res,next)=>{
   try{
    const dt= await db.query(`SELECT * FROM products`);
    res.send(dt)
   }
    catch{
        res.send('err')
    }
}


