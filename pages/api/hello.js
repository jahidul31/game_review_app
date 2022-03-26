import dbConnect from "../../utility/mongo";
import tester from "../../models/Tester";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const users = await tester.create(req.body);
        res.status(201).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
