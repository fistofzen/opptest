require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const express = require("express");

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;


// app.use((req,res, next)=>{

//   if(req.method === 'GET') {
    
//     res.send('Get requests are disabled ');

//   }else{

//     next();
//   }

// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);




app.listen(port, () => {
  console.log("Server is running on port " + port);
});

const jwt = require('jsonwebtoken');
 
// const myFunc = async () => {
//   const token = jwt.sign({  _id:'abc123' },'thisismynewcourse', {expiresIn:'7 days'});
//   console.log(token);


//   const data = jwt.verify(token,'thisismynewcourse');

//   console.log(data);
// };

// myFunc();
 