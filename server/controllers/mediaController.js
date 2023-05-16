import { v2 as cloudinary } from "cloudinary";

//upload profile picture
const uploadUserPicture = async (req, res) => {
  console.log("req", req.file);

  try {
    const upload = await cloudinary.uploader.upload(req.file.path, {
      folder: "berliner-radmarkt",
      transformation: [{ width: 400, height: 400, crop: "fill" }],
    });
    console.log("upload", upload);
    res.status(200).json({
      msg: "image upload ok",
      imageUrl: upload.url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "couldn't upload image", error: error });
  }
};

export { uploadUserPicture };
