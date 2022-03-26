import { serialize } from "cookie";

export default async function handler(req, res) {
  const { cookies } = req;
  const method = req.method;
  const jwt = cookies.my_hash;

  switch (method) {
    case "POST":
      if (!jwt) {
        res.status(400).json({ success: false, data: "Token not found" });
      } else {
        try {
          const serialized = serialize("my_hash", null, {
            maxAge: -1,
            path: "/",
          });

          res.setHeader("Set-Cookie", serialized);
          res.status(200).json({ success: true, data: "Set Header Success" });
        } catch (error) {
          res.status(400).json({ success: false, data: "Set header failed" });
        }
      }

      break;
    default:
      res.status(400).json({ success: false, data: "Post failed" });
      break;
  }
}
