import bikeModel from "../models/bikeModel.js";

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

export { getAllBikes };
