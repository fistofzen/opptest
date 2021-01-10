const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");



router.get("/users/me", auth ,async (req, res) => {
  res.send(req.user);
  // try {
  //   const users = await User.find({});
  //   res.send(users);
  // } catch (error) {
  //   res.status(500).send(error);
  // }
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({user,token});
  } catch (error) {
    res.status(400).send(error);
  }

 
});

router.post('/user/login', async (req, res)=> {
  
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
 
    const token = await user.generateAuthToken();
    res.send({'user':user.getPublicProfile(),token});
  } catch (error) {
 
    res.status(400).send(error);
  }

});

router.post('/users/logout', auth, async (req,res) => {

  try{
    req.user.tokens = req.user.tokens.filter((token) => {
 
      return token.token !== req.token

    });

    await req.user.save();
    res.send();

  } catch (error) {
    res.status(400).send(error);
  }

});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.send(404, user);
    }
    res.send({'user':user.getgetPublicProfile()});
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "password", "age"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(404).send("Invalid Updates!");
  }

  const _id = req.params.id;
  try {

    const user = await User.findById(_id, req.body);

    updates.forEach(update => user[update] = req.body[update]);
    

    user.save();
    // const user = await User.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!user) {
      return res.status(404).send;
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send("No users found");
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
