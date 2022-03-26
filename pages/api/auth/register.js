import dbConnect from "../../../utility/mongo";
import gamerhub from "../../../models/Gamerhub";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;
  const { email, password } = req.body;
  const secrete = process.env.SECRATE_KEY;

  switch (method) {
    case "POST":
      try {
        const already = await gamerhub.findOne({ email: email });
        if (already.email) {
          return res.json({ warning: true });
        }
      } catch (error) {
        const authtoken = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            email: req.body.email,
          },
          secrete
        );
        const serilise = serialize("my_hash", authtoken, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });
        res.setHeader("Set-Cookie", serilise);
        const pass = await bcrypt.hash(password, 10);
        const users = await gamerhub.create({
          email,
          password: pass,
        });
        res.json({ success: true, data: users });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
