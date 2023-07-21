const mongoose=require('mongoose');

const connectDB= async ()=> {
   await mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .then(()=>console.log("Connection Successfull"))
    .catch(err=>{console.log(err)})
}
module.exports=connectDB