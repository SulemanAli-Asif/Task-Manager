const { response } = require('express');
const express=require('express');
const router = express.Router();

const{ getAllTasks, createTask,getTask, updatetask, deleteTask}=require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updatetask).delete(deleteTask)



module.exports=router;