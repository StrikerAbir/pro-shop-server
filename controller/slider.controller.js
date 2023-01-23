const Slider = require("../models/sliderSchema");

const slider = {
  // for adding user
  getSlider: async (req, res) => {
    try {
        const data = await Slider.find();
        res.send(data)
    } catch (error) {
      res.status(500).send(error.message);
    }
    },
    addSlider: async (req, res) => {
        try {
            const data = req.body;
            // console.log(data);
            const slider = new Slider(data);
            const result = await slider.save();
            // console.log(result);
            res.send(result);
        } catch (error) {
          res.status(500).send(error.message);
        }
    }

};

module.exports = slider;
