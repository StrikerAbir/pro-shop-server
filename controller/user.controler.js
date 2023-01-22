const User = require("../models/userSchema");

const user = {
    // for adding user
  addUser: async (req, res) => {
    try {
      const userData = req.body;
      User.findOne({ email: req.body.email }, async function (err, data) {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            res.send({ isExist: true });
          } else {
            const newUser = new User(userData);
            const result = await newUser.save();
            res.send({ result, isExist: false });
          }
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
    },

    // for login check
    login: async (req, res) => {
        try {
             const userData = req.body;
             User.findOne(
                 {
                     email: req.body.email,
                     password: req.body.password
                 },
               async function (err, data) {
                 if (err) {
                   console.log(err);
                 } else {
                    //  console.log(data);
                     if (data) {
                         res.send([data])
                     } else {
                         res.send([])
                     }
                     
                 }
               }
             );
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = user;
