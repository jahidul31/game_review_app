import { serialize } from "cookie";
import dbConnect from "../../../utility/mongo";
import gamerhub from "../../../models/Gamerhub";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;
  const { email, password } = req.body;
  const secrete = process.env.SECRATE_KEY;

  switch (method) {
    case "POST":
      try {
        const users = await gamerhub.findOne({ email: email });

        if (users.password === password) {
          const authtoken = sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
              email: email,
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
          res.status(200).json({ success: true, data: authtoken });
        }
      } catch (error) {
        res.status(401).json({ success: "data not found" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
