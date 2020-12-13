const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{

    useNewUrlParser:true,
    useCreateIndex:true    

});


// const Tasks = mongoose.model('Tasks',{
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// });

// const task = new Tasks({
//     description:'Test',
//     completed:true
// });

// task.save().then(()=>{
//     console.log(task);

// }).catch((error)=>{
//     console.log(error);

// })


const User = mongoose.model('User',{
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },  
    age:{
        type: Number,
        default:2
    }
});

const me = new User({

    name:'Ali',
    email:'www@ccc.com'

});

me.save().then((me)=>{
    
    console.log(me);


}).catch((error)=>{
    console.log(error);

});