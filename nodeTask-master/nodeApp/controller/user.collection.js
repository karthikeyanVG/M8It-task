const User = require("../model/User.model");
const GalleryImage = require("../model/Image.model");
const bcrypt = require("bcryptjs");
const { ReE, ReS } = require("../service/util.service.js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  var body = req.body;
  const userData = {
    name: body.name,
    password: body.password,
    email: body.email,
    phone: body.phone,
    address: body.address,
  };
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 8, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              ReS(res, { email: user.email + " is Registered!" });
            })
            .catch((err) => {
              ReE(res, err);
            });
        });
      } else {
        ReS(res, { message: "User already exists" });
      }
    })
    .catch((err) => {
      ReE(res, err);
    });
};

exports.Login = async (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            email: user.email,
          };
          let Token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "2h",
          });

          res.send(Token);
          console.log(Token);
        } else {
          // Passwords don't match
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};

exports.get_user = async (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  User.findById({ _id: decoded._id })
    .then((user) => {
      if (user) {
        ReS(res, user);
      } else {
        ReS(res, { message: "User does not exist" });
      }
    })
    .catch((err) => {
      ReE(res, err);
      console.log(err);
    });
};

exports.get_all = async (req, res) => {
  User.find({})
    .then((data) => {
      ReS(res, data);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.postGalleryImage = async  (req, res)=> {
  const userData = {
    image: req.body.image,
  };
  GalleryImage.findOne({
    image: req.body.image,
  }).then((user) => {
    if (!user) {
      GalleryImage.create(userData)
        .then((user) => {
          if (user) {
            res.send(req.body.image);
          }
        })
        .catch((err) => {
          res.send("error:" + err);
        });
    } else {
      res.json({ error: "Alredy Exist" });
    }
  });
};

exports.getGalleryImage = async  (req, res) =>{
  await GalleryImage.find({}, { image: 1, _id: 0 })
    .then((image) => {
      res.json(image);
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
};
