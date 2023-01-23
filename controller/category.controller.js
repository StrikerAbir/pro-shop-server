const Category = require("../models/categorySchema");

const category = {
    getCategory: async(req, res)=>{
        try {
            const data = await Category.find()
            // console.log(data);
            res.send(data)
        } catch (error) {
             res.status(500).send(error.message);
        }
    },
    addCategory: async (req, res) => {
        try {
          const data = req.body
          const cat = new Category(data);
          const result = await cat.save();
            // console.log(data);
            
          res.send("okkk");
        } catch (error) {
          res.status(500).send(error.message);
        }
    }
}

module.exports = category;