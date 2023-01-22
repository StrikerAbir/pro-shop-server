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

};

module.exports = slider;
