const express=require('express');
const app=express();
const dotenv=require('dotenv');
const tasks=require('./routes/tasks');
const connectDB = require('./DB/connectDB');
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||5000


//middleware
app.use(express.static('./public/'))
app.use(express.json())

//connect to DB
connectDB()
//routes

app.use('/api/v1/tasks',tasks)
//app.get('/api/v1/tasks')      -getting all the tasks
//app.post('/api/v1/tasks')      -creating the tasks
//app.get('/api/v1/tasks/:id')      -getting a single the tasks
//app.patch('/api/v1/tasks/:id')      -updating a the tasks
//app.delete('/api/v1/tasks/:id')      -deleting a the tasks




app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})