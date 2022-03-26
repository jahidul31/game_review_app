import dbConnect from "../../utility/mongo";
import tester from "../../models/Gamerhub";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const users = await tester.find();
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: "game not found" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
