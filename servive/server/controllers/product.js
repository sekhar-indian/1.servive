const atontecation=require('../models/antnaticationdata')
exports.signup = async (req, res) => {
 const {name,email,password}=await req.body;
 console.log(name,email,password)
 try{
  const newuser= await atontecation.create({
    name:name,
    email:email,
    password:password
   })
   res.status(2001).send('muni')
 } catch(err){
   res.status(500).send('jfsd')
   
 }

  
};



const product=require('../models/products');
exports.data =  (req, res, next) => {
  product.create({
    id:1,
    title:'vbmfdnvbmn',
    price:3.2,
    discriprion:'svddsdsbkfhfgfdgfdghfgdhgfhgfhhfgjkhfcdjigjlkfdugiojkl;dfjlgkjfdkghjkfdsjhkpfghgfhgfkdzsjhfcihds',
    imglink:'gfsdhgjhfkgvbjhbkdfjvbhkfdvbkhnfdkjhnkdf'
  }).then(res=>{
    console.log('ok')
  }).catch(res=>{
    console.log('not ok')
  })
};