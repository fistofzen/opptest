require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("blablabla")
//   .then((task) => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCound = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCound("5fd61bf34feb44085ca15588")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
