const Task=require('../model/tasks')


const getAllTasks=async (req,res)=>{
try{
 const tasks= await  Task.find({})
 res.status(200).json({tasks})

}
catch(err){
    res.status(500).json({msg:err})
}
}

const createTask= async (req,res)=>{
   try{
    const task=await Task.create(req.body)
    res.json({task}).status(201)
   }
   catch(error){
    res.status(500).json({msg:error})
   }
}

const getTask=async (req,res)=>{
try{
    const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
if(!task){
    return res.status(404).json({msg:`No task with ID ${taskID} exists`})
}
    res.status(200).json({task});
}
catch(err){
res.status(500).json({msg:err})
}
}


const deleteTask=async (req,res)=>{
    try{
        const {id:taskID}=req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        
        if(!task){
            return res.status(404).json({msg:`No task with ID ${taskID} exists`})
        }
        res.status(200).json(task)
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}


const updatetask=async(req,res)=>{
    try{
        const {id:taskID}=req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with ID ${taskID} exists`})
        }
        res.status(200).json({task})

    }
    catch(err){
        res.status(500).json({msg:err})

    }
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updatetask,
    deleteTask
}