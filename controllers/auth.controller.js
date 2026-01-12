import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (await User.findOne({ email }))
    return res.status(400).json({ message: "User exists" });

  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  res.status(201).json({ message: "Registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({ message: "Login successful" });
};
