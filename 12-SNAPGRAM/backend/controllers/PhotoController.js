const path = require("path");
const fs = require("fs");

const Photo = require("../models/Photo");
const photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // create photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    username: user.name,
  });

  // if photo created successfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
    return;
  }

  res.status(201).json(newPhoto);
};

// delete a photo from db
const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    console.log("Foto encontrada para deleção:", photo);

    // check if photo exist
    if (!photo) {
      return res.status(404).json({ errors: ["Foto não encontrada."] });
    }

    console.log("FOTO NO BANCO:", photo); // 👈 debug
    console.log("Foto encontrada para deleção:", photo);

    // check if photo belongs to user
    if (!photo.userId.equals(new mongoose.Types.ObjectId(reqUser._id))) {
      return res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
    }

    // Lógica para deletar a imagem do disco
    const imagePath = path.join(
      __dirname,
      "..",
      "uploads",
      "photos",
      photo.image
    );
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Erro ao deletar o arquivo de imagem:", err);
        } else {
          console.log("Arquivo de imagem deletado com sucesso.");
        }
      });
    }

    await Photo.findByIdAndDelete(photo._id);

    return res
      .status(200)
      .json({ id: photo._id, message: "Foto excluída com sucesso." });
  } catch (error) {
    console.error("Erro no deletePhoto:", error);
    return res.status(500).json({ errors: ["Erro no servidor."] });
  }
};

// get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// get user photos
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
};
