const mongoose =require('mongoose');

const dbString=process.env.DB_STRING;
const dbName='E_commerce';



const ConnectDb=()=>{
    return mongoose.connect(`${dbString}${dbName}`)
    .then(()=>{
        console.log("Db connected")
    })
    .catch((e)=>{
        console.log(dbString)
        console.log("error wile connecting db   "+e);
        process.exit(-1);
    })
    
}

module.exports=ConnectDb;