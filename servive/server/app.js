const express=require('express');
const app=express();
const user=require('./routers/user');
const sequelize = require('./models/products');
const athontecationData=require('./models/antnaticationdata');
const cors=require('cors');

app.use(express.json());
app.use(cors())
app.use(user)



// Syncing authentication data
athontecationData.sync()
    .then(() => {
        console.log('athontecationData ok');
    })
    .catch(err => {
        console.error('athontecationData not ok:', err);
    });

// Syncing sequelize
sequelize.sync()
    .then(() => {
        console.log('ok');
    })
    .catch(err => {
        console.error('sequelize sync error:', err);
    });

app.listen(4000, () => {
    console.log('Server is running on port 3000');
});