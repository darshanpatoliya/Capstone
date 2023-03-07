import express from "express";
import asyncHandler from "express-async-handler";
import { protect, admin } from "../Middleware/AuthMiddleware.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userRouter = express.Router();
dotenv.config();
const app = express();
app.set("view engine", "ejs")
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


// LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

// PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// UPDATE PROFILE
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// GET ALL USER ADMIN
userRouter.get(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);


// Forget password
userRouter.post("/forgetpassword", async (req, res) => {
  const { email } = req.body;
  try {
    const olduser = await User.findOne({ email });
    if (!olduser) {
      return res.json({ status: "User not Exists!!" });
    }
    const secret = JWT_SECRET + olduser.password;
    const token = generateToken(olduser._id)
    const link = `http://localhost:5000/api/users/resetpassword/${olduser._id}/${token}`;
    console.log(link);
  }
  catch (error) {
  }
});

// reset password 
userRouter.get('/resetpassword/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const olduser = await User.findOne({ _id: id });
  if (!olduser) {
    return res.json({ status: "User not Exists!!" });
  }
  const secret = process.env.JWT_SECRET + olduser.password;
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    res.render('password', { email: olduser.email });
    // res.send("Verified")
    console.log("Verified");
  }
  catch (error) {
    console.log(error);
    res.send("Not Verified")

  }

  // res.send("Done")
})





userRouter.post('/resetpassword/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const newPassword = req.body.password;
  const user = await User.findById({ _id: id });
  console.log("Parsssowrd: " + user.password);
  if (user) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashPassword;
    await user.save();

    // res.json({
    //   _id: updatedUser._id,
    //   name: updatedUser.name,
    //   email: updatedUser.email,
    //   isAdmin: updatedUser.isAdmin,
    //   createdAt: updatedUser.createdAt,
    //   token: generateToken(updatedUser._id),
    // });

  } else {
    res.status(404);
    throw new Error("User not found");
  }
})

export default userRouter;
