require("../src/db/mongoose");
const User = require("../src/models/user");

//5fd619dcc87ba5508cf3c56f

// User.findByIdAndUpdate("5fd619e9c87ba5508cf3c570", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });


  const updataAgeAndCount = async (id, age) => {

    const user = await User.findByIdAndUpdate(id, {age});

    const count = await User.countDocuments({age});
    return count;

  }


  updataAgeAndCount("5fd51580a27a232ae0d3cb6d",1).then((count) => {
    console.log(count);


  }).catch((e)=>{
    console.log(e);

  });
