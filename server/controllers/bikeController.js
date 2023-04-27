import bikeModel from "../models/bikeModel.js";

// get all bikes
const getAllBikes = async (req, res) => {
  try {
    const allBikes = await bikeModel.find({});
    console.log("allBikes", allBikes);
    res.status(201).json({
      number: allBikes.length,
      allBikes,
    });
  } catch (error) {
    res.status(500).json({
      error,
      msg: "something went wrong in the server",
    });
  }
};

//get bike by id
const getBikebyId = async (req, res) => {
  const { bikeId } = req.params;

  try {
    const requestedId = await bikeModel.find({ _id: req.params._id }).exec();
    res.status(201).json({
      number: requestedId.length,
      requestedId,
    });
  } catch (error) {
    res.status(500).json({
      msg: "something went wrong in the server",
    });
  }
};

export { getAllBikes, getBikebyId };
