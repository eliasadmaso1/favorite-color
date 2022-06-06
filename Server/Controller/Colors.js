const Color = require("../Model/Color");

const getColors = async (req, res) => {
  try {
    const colors = await Color.find({});
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).json(err);
  }
};

const updateColor = async (req, res) => {
  try {
    const filterById = { _id: req.body.id };
    const existingColor = await Color.findOne(filterById);
    if(existingColor){
        const newColorVotesNumber = existingColor.votes + 1;

        await Color.findOneAndUpdate(filterById, {
          votes: newColorVotesNumber,
        });
        res.status(200).json("The Color Updated!");

    }
    else{
        res.status(200).json("The coloor not exist!");

    }
  

  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getColors,
  updateColor,
};
