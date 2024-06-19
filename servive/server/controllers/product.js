
const product=require('../models/products')


// exports.signup= async (req,res)=>{

// const mewp=await product.create({
//   id:req.body.id,
//   title:req.body.title,
//   price:req.body.price,
//   discriprion:req.body.discriprion,
//   imglink:req.body.imglink
// }).then(res=>{
//   console.log('ok')
// }).catch(res=>{
//   console.log('not ok')
// })

// }

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await product.create({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      imglink: req.body.imglink
    });
    console.log('Product created:', newProduct);
    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      message: 'Failed to create product',
      error: error.message
    });
  }
};


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